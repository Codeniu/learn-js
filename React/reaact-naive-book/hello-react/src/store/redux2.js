const createStore = reducer => {
  let state = null
  const listeners = []
  const subscribe = listener => listeners.push(listener)
  const getState = () => state
  const dispatch = action => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  dispatch({})
  return {
    getState,
    dispatch,
    subscribe,
  }
}

function themeReducer(state, action) {
  if (!state)
    return {
      themeName: 'Red Theme',
      themeColor: 'red',
    }
  switch (action.type) {
    case 'UPATE_THEME_NAME':
      return {
        ...state,
        themeName: action.themeName,
      }
    case 'UPATE_THEME_COLOR':
      return {
        ...state,
        themeColor: action.themeColor,
      }
    default:
      return state
  }
}

function renderApp(newAppState, oldAppState = {}) {
  // 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
  if (newAppState === oldAppState) return // 数据没有变化就不渲染了
  console.log('render app...')
  renderTitle(newAppState.title, oldAppState.title)
  renderContent(newAppState.content, oldAppState.content)
}

function renderTitle(newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return // 数据没有变化就不渲染了
  console.log('render title...')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}

function renderContent(newContent, oldContent = {}) {
  if (newContent === oldContent) return // 数据没有变化就不渲染了
  console.log('render content...')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
}

// 定一个 reducer
function reducer(state, action) {
  /* 初始化 state 和 switch case */
}

// 生成 store
const store = createStore(reducer)

// 监听数据变化重新渲染页面
store.subscribe(() => renderApp(store.getState()))

// 首次渲染页面
renderApp(store.getState())

// 后面可以随意 dispatch 了，页面自动更新

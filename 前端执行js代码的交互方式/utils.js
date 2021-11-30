function Utils(errorOutputId) {
  let self = this
  this.errorOutput = document.getElementById(errorOutputId)

  this.executeCode = function (textAreaId) {
    try {
      this.clearError()
      let code = document.getElementById(textAreaId).value
      eval(code)
    } catch (err) {
      this.printError(err)
    }
  }

  this.clearError = function () {
    this.errorOutput.innerHTML = ''
  }

  this.printError = function (err) {
    if (typeof err === 'undefined') {
      err = ''
    } else if (typeof err === 'number') {
      if (!isNaN(err)) {
        if (typeof cv !== 'undefined') {
          err = 'Exception: ' + cv.exceptionFromPtr(err).msg
        }
      }
    } else if (typeof err === 'string') {
      let ptr = Number(err.split(' ')[0])
      if (!isNaN(ptr)) {
        if (typeof cv !== 'undefined') {
          err = 'Exception: ' + cv.exceptionFromPtr(ptr).msg
        }
      }
    } else if (err instanceof Error) {
      err = err.stack.replace(/\n/g, '<br>')
    }
    this.errorOutput.innerHTML = err
  }

  this.loadCode = function (scriptId, textAreaId) {
    let scriptNode = document.getElementById(scriptId)
    let textArea = document.getElementById(textAreaId)
    if (scriptNode.type !== 'text/code-snippet') {
      throw Error('Unknown code snippet type')
    }
    textArea.value = scriptNode.text.replace(/^\n/, '')
  }
}

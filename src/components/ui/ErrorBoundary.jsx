import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary capturou um erro:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4" style={{backgroundColor: '#FFFFFF'}}>
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-semibold mb-4" style={{color: '#1C1C1C'}}>
              Ops! Algo deu errado
            </h1>
            <p className="text-lg mb-8" style={{color: '#4A4A4A'}}>
              Ocorreu um erro inesperado. Por favor, recarregue a página.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null })
                window.location.reload()
              }}
              className="px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg"
              style={{backgroundColor: '#F28C28'}}
            >
              Recarregar página
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary


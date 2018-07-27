import React, { Component } from 'react';
import LoginView from './LoginView';
import SignUpView from './SignUpView';
import PasswordReset from './PasswordReset';

class AuthView extends Component {

    constructor() {
        super();

        this.changeView = this.changeView.bind(this);

        // 1: Giriş Ekranı
        // 2. Kayıt Ekranı
        // 3. Şifre reset ekranı

        this.state = {
            currentView: 1
        }
    }


    changeView(newView){        
        this.setState({
            currentView : newView
        })
    }


    render() {

        return this.state.currentView  === 1
                        ? <LoginView onViewChange={this.changeView} />
                        : this.state.currentView === 2 
                        ? <SignUpView onViewChange={this.changeView} />
                        : <PasswordReset onViewChange={this.changeView} />

    }
}

export default AuthView;

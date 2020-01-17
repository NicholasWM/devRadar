import React from 'react';
import './style/global.css'
import './style/App.css'
import './style/Sidebar.css'
import './style/Main.css'

function App() {
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuario do Github</label>
                        <input name="github_username" id="username_github" required/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required/>
                    </div>
                        
                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input name="latitude" id="latitude" required/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input name="longitude" id="longitude" required/>
                        </div>
                    </div>
                    <button type="submit">Salvar</button>

                </form>
            </aside>
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/39601848?v=4" alt="Nicholas"/>
                            <div className="user-info">
                                <strong>NicholasWM</strong>
                                <spam>ReactJS, React Native, Flask, NodeJS</spam>
                            </div>
                        </header>
                        <p>Um entusiasta entusiasmado :D</p>
                        <a href="https://github.com/nicholaswm">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/39601848?v=4" alt="Nicholas"/>
                            <div className="user-info">
                                <strong>NicholasWM</strong>
                                <spam>ReactJS, React Native, Flask, NodeJS</spam>
                            </div>
                        </header>
                        <p>Um entusiasta entusiasmado :D</p>
                        <a href="https://github.com/nicholaswm">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/39601848?v=4" alt="Nicholas"/>
                            <div className="user-info">
                                <strong>NicholasWM</strong>
                                <spam>ReactJS, React Native, Flask, NodeJS</spam>
                            </div>
                        </header>
                        <p>Um entusiasta entusiasmado :D</p>
                        <a href="https://github.com/nicholaswm">Acessar perfil no Github</a>
                    </li>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/39601848?v=4" alt="Nicholas"/>
                            <div className="user-info">
                                <strong>NicholasWM</strong>
                                <spam>ReactJS, React Native, Flask, NodeJS</spam>
                            </div>
                        </header>
                        <p>Um entusiasta entusiasmado :D</p>
                        <a href="https://github.com/nicholaswm">Acessar perfil no Github</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default App;
// 登录界面类
class LoginPage {
    private container: HTMLElement;
    
    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'login-container';
        this.container.className = 'login-container';
        document.body.appendChild(this.container);
        this.createLoginPage();
    }
    
    private createLoginPage(): void {
        this.container.innerHTML = `
            <div class="login-form">
                <img src="/assets/cute_dog.gif" alt="登录头部动画" class="login-gif">
                <h2>用户登录</h2>
                <form id="loginForm">
                    <div class="input-group">
                        <label for="username">用户名:</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="input-group">
                        <label for="password">密码:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit" class="login-button">登录</button>
                </form>
                <div class="register-link">
                    还没有账号？<a href="#" id="registerLink">立即注册</a>
                </div>
            </div>
        `;
        
        // 添加样式
        this.addStyles();
        
        // 绑定事件
        this.bindEvents();
    }
    
    private addStyles(): void {
        const style = document.createElement('style');
        style.textContent = `
            body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #E9EDF4; color: #333333; height: 100vh; overflow: hidden; }
            .login-container { display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #E9EDF4; z-index: 1000; position: fixed; width: 100%; height: 100%; }
            .login-form { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); padding: 30px; border-radius: 25px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); width: 300px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.2); position: relative; z-index: 1001; }
            .login-form h2 { margin-top: 0; margin-bottom: 20px; color: #333333; }
            .input-group { margin-bottom: 15px; }
            .input-group label { display: block; margin-bottom: 5px; font-weight: bold; color: #333333; }
            .input-group input { width: 100%; padding: 10px; border: 2px solid #66b2ff; border-radius: 15px; box-sizing: border-box; background: #add8e6; color: #333333; }
            .input-group input::placeholder { color: rgba(255, 255, 255, 0.7); }
            .login-button { width: 100%; padding: 12px; background: linear-gradient(45deg, #007bff, #00c6ff); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; margin-top: 10px; transition: transform 0.2s; }
            .login-button:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); }
            .register-link { margin-top: 20px; color: #333333; }
            .register-link a { color: #333333; text-decoration: none; }
            .register-link a:hover { text-decoration: underline; }
            .login-gif { width: 150px; height: auto; border-radius: 15px; margin-bottom: 20px; }
        `;
        document.head.appendChild(style);
    }
    
    private bindEvents(): void {
        const form = document.getElementById('loginForm') as HTMLFormElement;
        const registerLink = document.getElementById('registerLink') as HTMLAnchorElement;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
        
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('注册功能待开发');
        });
    }
    
    private handleLogin(): void {
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        
        // 简单验证
        if (!username.trim() || !password.trim()) {
            alert('请输入用户名和密码');
            return;
        }
        
        // 模拟登录验证（这里可以替换为实际的登录逻辑）
        if (username === 'admin' && password === 'admin') {
            this.hideLoginPage();
            // 动态导入游戏模块
            import('./game/main').then(module => {
                const StartGame = module.default;
                const game = StartGame('game-container');
                (window as any).game = game;
                // 登录成功后启动菜单场景
                game.scene.start('MenuScene');
            });
        } else {
            alert('用户名或密码错误');
        }
    }
    
    private hideLoginPage(): void {
        this.container.style.display = 'none';
    }
}

// 页面加载完成后初始化登录界面
document.addEventListener('DOMContentLoaded', () => {
    // 先创建登录页面
    const loginPage = new LoginPage();
});
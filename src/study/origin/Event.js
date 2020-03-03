/**
    HTML 通常写法是：
        <button onclick="activateLasers()">激活按钮</button>

    React 中写法为：
        <button onClick={activateLasers}>激活按钮</button>

    =========================================================
    在 React 中另一个不同是你不能使用返回 false 的方式阻止默认行为， 你必须明确的使用 preventDefault。
        
        通常写法：
            <a href="#" onclick="console.log('点击链接'); return false">点我</a>

        在 React 的写法为：
            function ActionLink() {
            function handleClick(e) {
                e.preventDefault();
                console.log('链接被点击');
            }
            return (
                <a href="#" onClick={handleClick}>
                点我
                </a>
            );
            }
 */
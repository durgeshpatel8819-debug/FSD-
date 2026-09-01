//  const div = document.getElementById('root');
// // const h1 = document.createElement('h1');
// // h1.innerText = 'E-Commerce Website';
// // div.appendChild(h1);

// const root = ReactDOM.createRoot(div);
// const h1 = React.createElement("h1", {}, "E-Commerce Website");
// root.render(h1);

<div>
    <div id="innerdiv-01">
        <span>01</span>
        <span>02</span>``
    </div>
    <div id="innerdiv-02">
        <span>01</span>
        <span>02</span>
    </div>
</div>
    const root = ReactDOM.createRoot(document.getElementById("root"));
    const div = React.createElement("div", {}, [
        React.createElement("div", { id: "inner-div-01" }, [
            React.createElement("span", {}, "01"),
            React.createElement("span", {}, "02")
        ]),
        React.createElement("div", { id: "inner-div-02" }, [
            React.createElement("span", {}, "01"),
            React.createElement("span", {}, "02")
        ])
    ]);  
    root.render(div);
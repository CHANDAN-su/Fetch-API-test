// fetch("https://fakestoreapi.com/products/1")

fetch("index.json")
    .then((res) => {
        // console.log(res);
        return res.json();
    })
    .then((data) => {
        // console.log(data);

        let out = "";
        data.forEach(element => {
            out += `
        <tr>
        <th scope="row">${element.category}</th>
        <td>${element.title}</td>
        <td>${element.price}</td>
        <td>${element.description}</td>
        <td><img src="${element.image}" ></td> 
      </tr>
        `
        });

        document.getElementById("datafetch").innerHTML = out;
    })



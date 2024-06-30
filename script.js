const product = [
    {
      id: 0,
      image: "image1.webp",
      title: "Neighborhood",
      price: 75,
    },
    {
      id: 1,
      image: "img2.webp",
      title: "Neighborhood",
      price: 80,
    },
    {
      id: 2,
      image: "image3.webp",
      title: "Neighborhood",
      price: 91,
    },
    {
      id: 3,
      image: "image4.webp",
      title: "Neighborhood",
      price: 30,
    },
    {
      id: 4,
      image: "img5.webp",
      title: "Neighborhood",
      price: 85,
    },
    {
      id: 5,
      image: "image6.webp",
      title: "Neighborhood",
      price: 89,
    },
    {
      id: 6,
      image: "img7.webp",
      title: "Neighborhood",
      price: 59,
    },
    {
      id: 7,
      image: "image8.webp",
      title: "Neighborhood",
      price: 52,
    },
    {
      id: 8,
      image: "image9.webp",
      title: "Neighborhood",
      price: 56,
    },
    {
      id: 9,
      image: "image10.webp",
      title: "Neighborhood",
      price: 59,
    },
    {
      id: 10,
      image: "img11.webp",
      title: "Neighborhood",
      price: 99,
    },
    {
      id: 11,
      image: "img12.webp",
      title: "Neighborhood",
      price: 87,
    },
    {
      id: 12,
      image: "img13.webp",
      title: "Neighborhood",
      price: 90,
    },
    
  ];
  
  const categories = [...new Set(product.map((item) => item))];
  
  let i = 0;
  document.getElementById("root").innerHTML = categories
    .map((item) => {
      var { image, title, price } = item;
      return (
        `
          <div class="box">
          <div class="img-box">
          <img class="images" src=${image}></img>
          </div>
          <div class="bottom">
          <p>${title}</p>
          <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" +
        i++ +
        ")'>Add to cart</button>" +
        `</div>
          </div>
          `
      );
    })
    .join("");
  
  var cart = [];
  
  function addtocart(a) {
    let item = cart.find((product) => product.id === categories[a].id);
    if (!item) {
      cart.push({ ...categories[a], quantity: 1 });
    }
    displaycart();
  }
  
  
    function delElement(id) {
      cart = cart.filter((product) => product.id !== id);
      displaycart();
    }
  
  
  function increaseQuantity(id) {
    let item = cart.find((product) => product.id === id);
    if (item) {
      item.quantity += 1;
      displaycart();
    }
  }
  
  function decreaseQuantity(id) {
    let item = cart.find((product) => product.id === id);
    if (item) {
      item.quantity -= 1;
      if (item.quantity === 0) {
        cart = cart.filter((product) => product.id !== id);
      }
      displaycart();
    }
  }
  
  function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    document.getElementById("total").innerHTML = "$ " + 0 + " .00";
    if (cart.length == 0) {
      document.getElementById("cartItem").innerHTML = "Your Cart is empty";
    } else {
      document.getElementById("cartItem").innerHTML = cart
        .map((items) => {
          var { id, image, title, price, quantity } = items;
          total += price * quantity;
          document.getElementById("total").innerHTML = "$ " + total + ".00";
          return (
            `<div class="cart-item">
              <div class="row-img">
                <img class="rowing" src=${image}>
              </div>
              <p style="font-size:12px;">${title}</p>
              <h1 style="font-size:15px;">$ ${price}.00 x ${quantity}</h1>
              <button onclick='increaseQuantity(${id})'>+</button>
              <button onclick='decreaseQuantity(${id})'>-</button>
              <i class='fa-solid fa-trash' onclick='delElement(${id})'></i>
            </div>`
          );
        })
        .join("");
    }
  }
  document.getElementById("cartButton").addEventListener("click", function() {
    document.getElementById("cartSidebar").classList.toggle("active");
});
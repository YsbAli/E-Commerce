let sortby_btn = document.getElementById("sortby_btn");

let sortby_opt = document.getElementsByClassName("sortby-opt")[0];

//sort by btn toggle (on clicking sort by btn toggle the li)

sortby_btn.addEventListener("click", () => {
  sortby_opt.classList.toggle("sortby-opt_active");
});

let Newest = document.getElementById("newest");
let All_shoes = document.getElementById("all shoes");
let Low = document.getElementById("low");
let High = document.getElementById("high");

// const url = "json.json"

// fetch(url).then((res)=>{
//     res.json().then((data)=>{
//         console.log(data)
//     })

// })

// shorcut way

const Database_Url = "db.json";
let Main_shoes_box = document.getElementsByClassName("main_shoes_box")[0];

fetch(Database_Url)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data)  //showing all the data
    const all_shoes_arr = [...data];
    const newest_arr = [...data].splice(0, 8);
    const low_arr = [...data];
    const high_arr = [...data];

    data.forEach((el, i) => {
      const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
      console.log(Img);
      let card = document.createElement("a");
      card.classList.add("card");
      card.innerHTML = `<img src="${Img}" alt="${Name}" />
        <h5 class="card-title" title="${Name}">
        ${Name}
        </h5>
        <p>${Category} Shoes</p>
        <div class="price">
          <h5>RS ${Price}</h5>
          <h5>MRP: <del>${MRP}</del></h5>
        </div>
        <div class="color-tag">
          <h6>Color ${Color}</h6>
          <h6>${ColorTag}</h6>
        </div>`;

      Main_shoes_box.append(card);
    });

    //Sorted By Newest Button

    Newest.addEventListener("click", () => {
      Main_shoes_box.innerHTML = ""; //alert('Nothing here');

      sortby_btn.innerHTML = `<h5>Sort By: Newest<i class="bi bi-chevron-down"></i></h5>`;

      sortby_opt.classList.toggle("sortby-opt_active");

      newest_arr.forEach((el, i) => {
        const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
        console.log(Img);
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `<img src="${Img}" alt="${Name}" />
          <h5 class="card-title" title="${Name}">
          ${Name}
          </h5>
          <p>${Category} Shoes</p>
          <div class="price">
            <h5>RS ${Price}</h5>
            <h5>MRP: <del>${MRP}</del></h5>
          </div>
          <div class="color-tag">
            <h6>Color ${Color}</h6>
            <h6>${ColorTag}</h6>
          </div>`;

        Main_shoes_box.append(card);
      });
    });

    //Sorted By All Shoes Button

    All_shoes.addEventListener("click", () => {
      Main_shoes_box.innerHTML = ""; //alert('Nothing here');

      sortby_btn.innerHTML = `<h5>Sort By: All Shoes <i class="bi bi-chevron-down"></i></h5>`;

      sortby_opt.classList.toggle("sortby-opt_active");

      all_shoes_arr.forEach((el, i) => {
        const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
        console.log(Img);
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `<img src="${Img}" alt="${Name}" />
          <h5 class="card-title" title="${Name}">
          ${Name}
          </h5>
          <p>${Category} Shoes</p>
          <div class="price">
            <h5>RS ${Price}</h5>
            <h5>MRP: <del>${MRP}</del></h5>
          </div>
          <div class="color-tag">
            <h6>Color ${Color}</h6>
            <h6>${ColorTag}</h6>
          </div>`;

        Main_shoes_box.append(card);
      });
    });

    //Sorted By Low

    Low.addEventListener("click", () => {
      Main_shoes_box.innerHTML = ""; //alert('Nothing here');

      sortby_btn.innerHTML = `<h5>Sort By: Low <i class="bi bi-chevron-down"></i></h5>`;

      sortby_opt.classList.toggle("sortby-opt_active");

      low_arr.sort(({ Price: a }, { Price: b }) => a - b);

      low_arr.forEach((el, i) => {
        const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
        console.log(Img);
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `<img src="${Img}" alt="${Name}" />
        <h5 class="card-title" title="${Name}">
        ${Name}
        </h5>
        <p>${Category} Shoes</p>
        <div class="price">
          <h5>RS ${Price}</h5>
          <h5>MRP: <del>${MRP}</del></h5>
        </div>
        <div class="color-tag">
          <h6>Color ${Color}</h6>
          <h6>${ColorTag}</h6>
        </div>`;

        Main_shoes_box.append(card);
      });
    });

    //Sorted By High
    High.addEventListener("click", () => {
      Main_shoes_box.innerHTML = ""; //alert('Nothing here');

      sortby_btn.innerHTML = `<h5>Sort By: High <i class="bi bi-chevron-down"></i></h5>`;

      sortby_opt.classList.toggle("sortby-opt_active");

      high_arr.sort(({ Price: a }, { Price: b }) => a - b);

      high_arr.reverse();

      high_arr.forEach((el, i) => {
        const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
        console.log(Img);
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `<img src="${Img}" alt="${Name}" />
      <h5 class="card-title" title="${Name}">
      ${Name}
      </h5>
      <p>${Category} Shoes</p>
      <div class="price">
        <h5>RS ${Price}</h5>
        <h5>MRP: <del>${MRP}</del></h5>
      </div>
      <div class="color-tag">
        <h6>Color ${Color}</h6>
        <h6>${ColorTag}</h6>
      </div>`;

        Main_shoes_box.append(card);
      });
    });




    //Boots toggle Section
    
    let Boot_arr = all_shoes_arr.filter((el) => {
      return el.Type === "Boots";
    });
    // console.log(Boot_arr)   // 2

    let ALL_Filter_Arr = [];
    //  console.log(ALL_Filter_Arr) // emplty[]

    // ALL_Filter_Arr = ALL_Filter_Arr.concat(Boot_arr)
    //  console.log(ALL_Filter_Arr)    //2

    let boots = document.getElementById("boots");
    boots.addEventListener("click", () => {
      if (boots.title === "boots_filter_on") {
        Main_shoes_box.innerHTML = " ";
        boots.classList.toggle(".i_active");
        boots.classList.toggle("bi-toggle2-off");
        boots.classList.toggle("bi-toggle2-on");
        boots.title = "boots_filter_off";
        ALL_Filter_Arr = ALL_Filter_Arr.concat(Boot_arr);

        ALL_Filter_Arr.forEach((el, i) => {
          const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
          console.log(Img);
          let card = document.createElement("a");
          card.classList.add("card");
          card.innerHTML = `<img src="${Img}" alt="${Name}" />
            <h5 class="card-title" title="${Name}">
            ${Name}
            </h5>
            <p>${Category} Shoes</p>
            <div class="price">
              <h5>RS ${Price}</h5>
              <h5>MRP: <del>${MRP}</del></h5>
            </div>
            <div class="color-tag">
              <h6>Color ${Color}</h6>
              <h6>${ColorTag}</h6>
            </div>`;

          Main_shoes_box.append(card);
        });
      }
      else{
        Main_shoes_box.innerHTML = '';
        boots.classList.toggle(".i_active");
        boots.classList.toggle("bi-toggle2-off");
        boots.classList.toggle("bi-toggle2-on");
        boots.title = "boots_filter_on";
        ALL_Filter_Arr = ALL_Filter_Arr.filter((el) =>{
          return Boot_arr.indexOf(el) < 0;
        })
        
        ALL_Filter_Arr.forEach((el, i) => {
          const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
          console.log(Img);
          let card = document.createElement("a");
          card.classList.add("card");
          card.innerHTML = `<img src="${Img}" alt="${Name}" />
            <h5 class="card-title" title="${Name}">
            ${Name}
            </h5>
            <p>${Category} Shoes</p>
            <div class="price">
              <h5>RS ${Price}</h5>
              <h5>MRP: <del>${MRP}</del></h5>
            </div>
            <div class="color-tag">
              <h6>Color ${Color}</h6>
              <h6>${ColorTag}</h6>
            </div>`;

          Main_shoes_box.append(card);
        });

      }


    });

     // Loafer Shoes

     
     let loafer_arr = all_shoes_arr.filter((el) => {
      return el.Type === "Loafer";
    });
    console.log(loafer_arr)

    let loafer = document.getElementById("loafer");

    loafer.addEventListener("click", () => {
      if (loafer.title === "loafer_filter_on") {
        Main_shoes_box.innerHTML = " ";
        loafer.classList.toggle(".i_active");
        loafer.classList.toggle("bi-toggle2-off");
        loafer.classList.toggle("bi-toggle2-on");
        loafer.title = "loafer_filter_off";
        ALL_Filter_Arr = ALL_Filter_Arr.concat(loafer_arr);

        ALL_Filter_Arr.forEach((el, i) => {
          const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
          console.log(Img);
          let card = document.createElement("a");
          card.classList.add("card");
          card.innerHTML = `<img src="${Img}" alt="${Name}" />
            <h5 class="card-title" title="${Name}">
            ${Name}
            </h5>
            <p>${Category} Shoes</p>
            <div class="price">
              <h5>RS ${Price}</h5>
              <h5>MRP: <del>${MRP}</del></h5>
            </div>
            <div class="color-tag">
              <h6>Color ${Color}</h6>
              <h6>${ColorTag}</h6>
            </div>`;

          Main_shoes_box.append(card);
        });
      }
      else{
        Main_shoes_box.innerHTML = '';
        loafer.classList.toggle(".i_active");
        loafer.classList.toggle("bi-toggle2-off");
        loafer.classList.toggle("bi-toggle2-on");
        loafer.title = "loafer_filter_on";
        ALL_Filter_Arr = ALL_Filter_Arr.filter((el) =>{
          return loafer_arr.indexOf(el) < 0;
        })
        
        ALL_Filter_Arr.forEach((el, i) => {
          const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
          console.log(Img);
          let card = document.createElement("a");
          card.classList.add("card");
          card.innerHTML = `<img src="${Img}" alt="${Name}" />
            <h5 class="card-title" title="${Name}">
            ${Name}
            </h5>
            <p>${Category} Shoes</p>
            <div class="price">
              <h5>RS ${Price}</h5>
              <h5>MRP: <del>${MRP}</del></h5>
            </div>
            <div class="color-tag">
              <h6>Color ${Color}</h6>
              <h6>${ColorTag}</h6>
            </div>`;

          Main_shoes_box.append(card);
        });

      }
    });



    //Price Section

    let left = document.getElementById('left')
    let Right = document.getElementById('right')
    let Left_icon = document.getElementById('left_icon')
    let Right_icon = document.getElementById('right_icon')

    

    //Left

    left.addEventListener('click', ()=>{
      Left_icon.style.left = left.value + '%';                ////style.left = 0% in css file
      let leftPrice_value = (500 /100) * left.value ;         //For Price Value

      document.getElementById("left_price").innerHTML = leftPrice_value 

      
      let arr_100_to_500 = all_shoes_arr.filter((el) =>{
        return el.Price <= 500
    });

    let Array_100_500_left = Array_100_500_left.filter((element) =>{
      return element.Price >= leftPrice_value

    })
                          
      Main_shoes_box.innerHTML = ''

      Array_100_500_left.forEach((el, i) => {
        const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
        console.log(Img);
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `<img src="${Img}" alt="${Name}" />
          <h5 class="card-title" title="${Name}">
          ${Name}
          </h5>
          <p>${Category} Shoes</p>
          <div class="price">
            <h5>RS ${Price}</h5>
            <h5>MRP: <del>${MRP}</del></h5>
          </div>
          <div class="color-tag">
            <h6>Color ${Color}</h6>
            <h6>${ColorTag}</h6>
          </div>`;

        Main_shoes_box.append(card);
      });
      
    }) 
      //Right 

      Right.addEventListener('click', ()=>{
        Right_icon.style.left = Right.value + '%';                ////style.left = 0% in css file
        let RightPrice_value = (500 /100) * Right.value ;         //For Price Value
        
        document.getElementById("right_price").innerHTML = RightPrice_value + 500

        let arr_500_to_1000 = all_shoes_arr.filter((el) =>{
          return el.Price >= 500
      });
  
      let Array_100_500_right = Array_100_500_left.filter((element) =>{
        return element.Price >= RightPrice_value + 500;
  
      })
                            
        Main_shoes_box.innerHTML = ''
  
        arr_500_to_1000.forEach((el, i) => {
          const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
          console.log(Img);
          let card = document.createElement("a");
          card.classList.add("card");
          card.innerHTML = `<img src="${Img}" alt="${Name}" />
            <h5 class="card-title" title="${Name}">
            ${Name}
            </h5>
            <p>${Category} Shoes</p>
            <div class="price">
              <h5>RS ${Price}</h5>
              <h5>MRP: <del>${MRP}</del></h5>
            </div>
            <div class="color-tag">
              <h6>Color ${Color}</h6>
              <h6>${ColorTag}</h6>
            </div>`;
  
          Main_shoes_box.append(card);
        });
        
      })

   
      const color  = ['white', 'gray-white', 'yellow','black', 'orange', 'green', 'red',
    'pink', 'gray-white',  'sky-blue' ,'blue','gray-black','brown','black']

    Array.from(document.getElementsByClassName('color')).forEach((el,i) =>{
      el.addEventListener('click',()=>{
        const color_arr = all_shoes_arr.filter((el)=>{
          return el.ColorTag === color[i]
        })
        Main_shoes_box.innerHTML = ''
        color_arr.forEach((el, i) => {
          const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
          console.log(Img);
          let card = document.createElement("a");
          card.classList.add("card");
          card.innerHTML = `<img src="${Img}" alt="${Name}" />
            <h5 class="card-title" title="${Name}">
            ${Name}
            </h5>
            <p>${Category} Shoes</p>
            <div class="price">
              <h5>RS ${Price}</h5>
              <h5>MRP: <del>${MRP}</del></h5>
            </div>
            <div class="color-tag">
              <h6>Color ${Color}</h6>
              <h6>${ColorTag}</h6>
            </div>`;
  
          Main_shoes_box.append(card);
        });
      })

    })


    document.getElementsByClassName('colors')[0].addEventListener('click' , ()=>{
      
      Main_shoes_box.innerHTML = ""
      all_shoes_arr.forEach((el, i) => {
        const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
        console.log(Img);
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `<img src="${Img}" alt="${Name}" />
          <h5 class="card-title" title="${Name}">
          ${Name}
          </h5>
          <p>${Category} Shoes</p>
          <div class="price">
            <h5>RS ${Price}</h5>
            <h5>MRP: <del>${MRP}</del></h5>
          </div>
          <div class="color-tag">
            <h6>Color ${Color}</h6>
            <h6>${ColorTag}</h6>
          </div>`;

        Main_shoes_box.append(card);
      });

    })



    const Number_Of_Shoes = [4,7, 9, 6, 5, 8,10, 11.5, 9.5, 16, 17, 18, 8.5 ]
     
   document.getElementsByClassName('size')[0].addEventListener('click', ()=>{
    Main_shoes_box.innerHTML = ''

    let number_array = all_shoes_arr.filter((el)=>{
      return el.Size4 === Number_Of_Shoes[0]
       
    })

    number_array.forEach((el, i) => {
      const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
      console.log(Img);
      let card = document.createElement("a");
      card.classList.add("card");
      card.innerHTML = `<img src="${Img}" alt="${Name}" />
        <h5 class="card-title" title="${Name}">
        ${Name}
        </h5>
        <p>${Category} Shoes</p>
        <div class="price">
          <h5>RS ${Price}</h5>
          <h5>MRP: <del>${MRP}</del></h5>
        </div>
        <div class="color-tag">
          <h6>Color ${Color}</h6>
          <h6>${ColorTag}</h6>
        </div>`;

      Main_shoes_box.append(card);
    });

   })

   document.getElementsByClassName('size')[1].addEventListener('click', ()=>{
    Main_shoes_box.innerHTML = ''

    let number_array = all_shoes_arr.filter((el)=>{
      return el.Size7 === Number_Of_Shoes[1]
       
    })

    number_array.forEach((el, i) => {
      const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
      console.log(Img);
      let card = document.createElement("a");
      card.classList.add("card");
      card.innerHTML = `<img src="${Img}" alt="${Name}" />
        <h5 class="card-title" title="${Name}">
        ${Name}
        </h5>
        <p>${Category} Shoes</p>
        <div class="price">
          <h5>RS ${Price}</h5>
          <h5>MRP: <del>${MRP}</del></h5>
        </div>
        <div class="color-tag">
          <h6>Color ${Color}</h6>
          <h6>${ColorTag}</h6>
        </div>`;

      Main_shoes_box.append(card);
    });
  })

  document.getElementsByClassName('size')[2].addEventListener('click', ()=>{
    Main_shoes_box.innerHTML = ''

    let number_array = all_shoes_arr.filter((el)=>{
      return el.Size9 === Number_Of_Shoes[2]
       
    })

    number_array.forEach((el, i) => {
      const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
      console.log(Img);
      let card = document.createElement("a");
      card.classList.add("card");
      card.innerHTML = `<img src="${Img}" alt="${Name}" />
        <h5 class="card-title" title="${Name}">
        ${Name}
        </h5>
        <p>${Category} Shoes</p>
        <div class="price">
          <h5>RS ${Price}</h5>
          <h5>MRP: <del>${MRP}</del></h5>
        </div>
        <div class="color-tag">
          <h6>Color ${Color}</h6>
          <h6>${ColorTag}</h6>
        </div>`;

      Main_shoes_box.append(card);
    });
   })

   
  document.getElementsByClassName('size')[3].addEventListener('click', ()=>{
    Main_shoes_box.innerHTML = ''

    let number_array = all_shoes_arr.filter((el)=>{
      return el.Size6 === Number_Of_Shoes[3]
       
    })

    number_array.forEach((el, i) => {
      const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
      console.log(Img);
      let card = document.createElement("a");
      card.classList.add("card");
      card.innerHTML = `<img src="${Img}" alt="${Name}" />
        <h5 class="card-title" title="${Name}">
        ${Name}
        </h5>
        <p>${Category} Shoes</p>
        <div class="price">
          <h5>RS ${Price}</h5>
          <h5>MRP: <del>${MRP}</del></h5>
        </div>
        <div class="color-tag">
          <h6>Color ${Color}</h6>
          <h6>${ColorTag}</h6>
        </div>`;

      Main_shoes_box.append(card);
    });
   })

   
  document.getElementsByClassName('size')[4].addEventListener('click', ()=>{
    Main_shoes_box.innerHTML = ''

    let number_array = all_shoes_arr.filter((el)=>{
      return el.Size5 === Number_Of_Shoes[4]
       
    })

    number_array.forEach((el, i) => {
      const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
      console.log(Img);
      let card = document.createElement("a");
      card.classList.add("card");
      card.innerHTML = `<img src="${Img}" alt="${Name}" />
        <h5 class="card-title" title="${Name}">
        ${Name}
        </h5>
        <p>${Category} Shoes</p>
        <div class="price">
          <h5>RS ${Price}</h5>
          <h5>MRP: <del>${MRP}</del></h5>
        </div>
        <div class="color-tag">
          <h6>Color ${Color}</h6>
          <h6>${ColorTag}</h6>
        </div>`;

      Main_shoes_box.append(card);
    });
   })


   
  document.getElementsByClassName('size')[5].addEventListener('click', ()=>{
    Main_shoes_box.innerHTML = ''

    let number_array = all_shoes_arr.filter((el)=>{
      return el.Size8 === Number_Of_Shoes[5]
       
    })

    number_array.forEach((el, i) => {
      const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
      console.log(Img);
      let card = document.createElement("a");
      card.classList.add("card");
      card.innerHTML = `<img src="${Img}" alt="${Name}" />
        <h5 class="card-title" title="${Name}">
        ${Name}
        </h5>
        <p>${Category} Shoes</p>
        <div class="price">
          <h5>RS ${Price}</h5>
          <h5>MRP: <del>${MRP}</del></h5>
        </div>
        <div class="color-tag">
          <h6>Color ${Color}</h6>
          <h6>${ColorTag}</h6>
        </div>`;

      Main_shoes_box.append(card);
    });
   })

   
  document.getElementsByClassName('size')[6].addEventListener('click', ()=>{
    Main_shoes_box.innerHTML = ''

    let number_array = all_shoes_arr.filter((el)=>{
      return el.Size8 === Number_Of_Shoes[6]
       
    })

    number_array.forEach((el, i) => {
      const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
      console.log(Img);
      let card = document.createElement("a");
      card.classList.add("card");
      card.innerHTML = `<img src="${Img}" alt="${Name}" />
        <h5 class="card-title" title="${Name}">
        ${Name}
        </h5>
        <p>${Category} Shoes</p>
        <div class="price">
          <h5>RS ${Price}</h5>
          <h5>MRP: <del>${MRP}</del></h5>
        </div>
        <div class="color-tag">
          <h6>Color ${Color}</h6>
          <h6>${ColorTag}</h6>
        </div>`;

      Main_shoes_box.append(card);
    });
   })

   document.getElementsByClassName('size')[7].addEventListener('click', ()=>{
    Main_shoes_box.innerHTML = ''

    let number_array = all_shoes_arr.filter((el)=>{
      return el.Size11 === Number_Of_Shoes[7]
       
    })

    number_array.forEach((el, i) => {
      const { Img, Name, Category, Color, Price, MRP, ColorTag } = el;
      console.log(Img);
      let card = document.createElement("a");
      card.classList.add("card");
      card.innerHTML = `<img src="${Img}" alt="${Name}" />
        <h5 class="card-title" title="${Name}">
        ${Name}
        </h5>
        <p>${Category} Shoes</p>
        <div class="price">
          <h5>RS ${Price}</h5>
          <h5>MRP: <del>${MRP}</del></h5>
        </div>
        <div class="color-tag">
          <h6>Color ${Color}</h6>
          <h6>${ColorTag}</h6>
        </div>`;

      Main_shoes_box.append(card);
    });
   })
  })


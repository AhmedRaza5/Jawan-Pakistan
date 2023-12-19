let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
];

const search = ()=>{
    const inputid = document.getElementById('input').value.toLowerCase();
    const select = document.getElementById('floatingSelect').value;

    const fill = arr.filter((fil)=>fil[select].toLowerCase() === inputid);
    const id = document.getElementById('mobileData');
    id.innerHTML = ""
    if(fill.length === 0){
        id.innerHTML = "No matching mobiles found."
    }else{
        id.innerHTML = "Mobile List:"
    }
    fill.map((list,i)=>{
        const {brand, model, price, camera, ram, rom}= list
        return(
            id.innerHTML += `
            <div key=${i} class="shadow p-3 mb-4 mt-2 bg-white rounded">
            <ul class="list-unstyled">
              <li>brand: ${brand}</li>
              <li>model: ${model}</li>
              <li>price: ${price}</li>
              <li>camera: ${camera}</li>
              <li>ram: ${ram}</li>
              <li>rom: ${rom}</li>
            </ul>
            </div>`
        )
    })
  document.getElementById('input').value = "";
 document.getElementById('floatingSelect').value = "Select mobile types";
};


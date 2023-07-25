var websites=[];
var websitename=document.getElementById('bookmarkname');
var websiteurl=document.getElementById('bookmarkurl');
var dialog=``;
if(localStorage.getItem('websitekey')!=null){
websites= JSON.parse(localStorage.getItem('websitekey'))
display()
}
function submit(){
  var website={
    website_name:bookmarkname.value,
    website_url:bookmarkurl.value
  }
  websites.push(website);
  localStorage.setItem('websitekey',JSON.stringify(websites));
  if(urlregexp.test(website.website_url)===true){
display()/*?*/
  }
  if(urlregexp.test(website.website_url)===false) {
    dialog+=`<dialog open class="d-flex shadow justify-content-center align-items-center position-absolute text-center w-75 flex-wrap fs-3 bg-white p-4 rounded-2"><p>The url you typed isnt valid please follow the rules below :<br></p><i class="fa-regular fa-circle-right p-2"></i><p>the url mst be like:http://www.example.com/index.html</p></dialog>`
    document.getElementById('dialog').innerHTML=dialog
  }
  clearInputs()
}
function display(){
  var container=``/*?*/
  for(var i=0;i<websites.length;i++){
    container+=`
    <tr>
    <td>${websites[i].website_name}</td>
    <td>${websites[i].website_url}</td>
    <td><button type="button" onclick="visit()" class="btn btn-success text-center"><i class="fa-solid fa-eye pe-2"></i><a href="${websites[i].website_url}">Visit</a></button></td>
    <td><button type="button" onclick="remove(${i})"class="btn btn-danger text-center"><i class="fa-solid fa-trash-can"></i>remove</button></td>
  </tr>
    `
  }
  document.getElementById('demo').innerHTML=container;
}
function remove(index){/*?*/
  websites.splice(index,1);
  localStorage.setItem('websitekey',JSON.stringify(websites));
  display()
}
function clearInputs(){
  bookmarkname.value="";
  bookmarkurl.value="";
}
   var urlregexp= /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
/*how to make no repeat*/
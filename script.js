// -----------------------------hide----------------------------
//$('#post-box').hide();

//-----------------------------show------------------------------
//$('#post-box').show();

// ------------------------------Add button ---------------------------
// let temp_html = '<button>I am a new button!</button>';
// $('#cards-box').append(temp_html);


//------------------------Add an cart---------------------------------
// let title = 'A new title!';

// let temp_html = `<div class="col">
// 				            <div class="card h-100">
// 				                <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
// 				                     class="card-img-top" alt="...">
// 				                <div class="card-body">
// 				                    <h5 class="card-title">${title}</h5>
// 				                    <p class="card-text">Loo loo la la.</p>
// 				                    <p>⭐⭐⭐</p>
// 				                    <p class="mycomment">My comment</p>
// 				                </div>
// 				            </div>
// 				        </div>`;
// $('#cards-box').append(temp_html);


function open_box(){
    $('#post-box').show()
}
function close_box(){
    $('#post-box').hide()
}

// $.ajax({
//     type: "GET",
//     url: "http://spartacodingclub.shop/en/global_air/seoul",
//     data: {},
//     success: function(response){ 
//       let dates = response['data']['forecast'];
//       console.log(dates)
//     }
//   })
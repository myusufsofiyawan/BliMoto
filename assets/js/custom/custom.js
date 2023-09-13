$(document).ready(function () {

  var kotaList = ['jakarta', 'bogor', 'depok', 'tanggerang', 'bekasi']


  $(".js-example-basic-single").select2(
    {
      placeholder: 'Select an option'
    }
  );

  $('#kotaSelect').select2({ data: kotaList })

  $('.selectpicker').selectpicker();


  // const allRanges = document.querySelectorAll(".range-wrap");
  // allRanges.forEach(wrap => {
  //   const range = wrap.querySelector(".range");
  //   const bubble = wrap.querySelector(".bubble");

  //   range.addEventListener("input", () => {
  //     setBubble(range, bubble);
  //   });
  //   setBubble(range, bubble);
  // });

  // function setBubble(range, bubble) {
  //   const val = range.value;
  //   const min = range.min ? range.min : 0;
  //   const max = range.max ? range.max : 100;
  //   const newVal = Number(((val - min) * 100) / (max - min));
  //   bubble.innerHTML = val;

  //   // Sorta magic numbers based on size of the native UI thumb
  //   bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  // }


  // gpt 
  function updateBubble(input) {
    const val = input.value;
    const bubble = document.getElementById('bubble');

    // Konversi nilai ke format mata uang Rupiah
    const formattedValue = formatToRupiah(val);
    bubble.textContent = formattedValue;

    // Sorta magic numbers based on size of the native UI thumb
    const min = input.min ? parseFloat(input.min) : 0;
    const max = input.max ? parseFloat(input.max) : 100;
    const newVal = ((val - min) * 100) / (max - min);
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  }

  function formatToRupiah(value) {
    // Gunakan metode Intl.NumberFormat untuk mengonversi nilai menjadi format mata uang Rupiah
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
  }

  // gpt 



});
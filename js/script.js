// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href hj
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    
    //pindahkan scroll
    $('body'.animate({
        scrollTop: elemenTujuan.offset().top - 50

    },1250,'swing'));

    e.preventDefault();

});
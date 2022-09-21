function Alessandro(){
    Swal.fire({
        title: 'Alessandro Lorenzo',
        imageUrl: 'https://i.pinimg.com/736x/f5/46/81/f546813de22aab16e159ef4c393818ae--mafia-party-mobsters.jpg',
        imageWidth: 250,
        imageHeight: 250,
        width: '700px',
        imageAlt: 'Alessandro',
        text: 'Tam atlayacakken bir adam tuttu beni. Ne olduğunu anlayamamıştım. Beyaz tenli, kahverengi saçlı, uzun boylu bir adamdı... ',
        confirmButtonText: 'Hikayeye Git.',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        showCancelButton: true,
        confirmButtonText: 'Hikayeye Git.',

    })
    .then((result) => {

        if (result.isConfirmed) {
          Swal.fire(
            'Alessandro Lorenzo',
            'Brooklyn köprüsüne çıktım, ayağıma taş bağladım ve atlamak için hazırlandım zor bir an değildi benim için. Bıkmıştım bu hayattan. Tam atlayacakken bir adam tuttu beni. Ne olduğunu anlayamamıştım. Beyaz tenli, kahverengi saçlı, uzun boylu bir adamdı. Kıyafeti tam bir mafya gibiydi. Siyah takımı ve bir şapkası vardı. Belinde duran silahı da mafya olduğunu kanıtlar nitelikteydi. İsmimi sordu, Alessandro dedim ve onun ismini sordum. Cevap vermedi ve onu takip etmemi söyledi...'
          )
        }
    })
}


function bridge(){
  Swal.fire({
    title: 'Uyarı',
    icon: 'error',
    text: 'Bu hikaye henüz yazılmadı.'
  }
  )
}
function _fs1(){
        hapus_menu();
        hapus_Semua();

        var y = [];
        for(i=0;i<$("input[name=fs1_fas]:checked").length;i++){
          y.push($("input[name=fs1_fas]:checked")[i].value);
        }
        var z = document.getElementById('fs1_type').value;
        var min = document.getElementById('fs1_hmin').value;
        var max = document.getElementById('fs1_hmax').value;
        document.getElementById('judul_table').innerHTML="Fungsional Baru";

        if ((y =="")&&(z == "")&&(min == ""||max == "")) {          
          document.getElementById('modal_title').innerHTML="Info";
          document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
          $('#myModal').modal('show'); 
          return;
        } else {
          $("#view_kanan_table").show();
          $('#kanan_table').empty();            
        }

        $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
        console.log(server+'_fs1.php?min='+min+'&max='+max+'&fas='+y+'&tipe='+z);
        $.ajax({url: server+'_fs1.php?min='+min+'&max='+max+'&fas='+y+'&tipe='+z, data: "", dataType: 'json', success: function(rows){ 
          if(rows == null)
          {
            alert('Data Did Not Exist !');
          }
            for (var i in rows){ 
              var row = rows[i];
              var id = row.id;
              var name = row.name;
              var lng = row.lng;
              var lat = row.lat;
              $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
              console.log(name);
              //MARKER
              centerBaru = new google.maps.LatLng(lat, lng);
              map.setCenter(centerBaru);
              map.setZoom(16);  
              var marker = new google.maps.Marker({
                position: centerBaru,              
                icon:'icon/marker_hotel.png',
                animation: google.maps.Animation.DROP,
                map: map
                });
              markersDua.push(marker);
              klikInfoWindow(id,marker);
            }//end for               
        }});//end ajax 
}

function _fr1(){
  hapus_menu();
  hapus_Semua();

  var y = [];
  for(i=0;i<$("input[name=fr1_fas]:checked").length;i++){
    y.push($("input[name=fr1_fas]:checked")[i].value);
  }
  var z = document.getElementById('fr1_destinasi').value;
  var min = document.getElementById('fr1_hmin').value;
  var max = document.getElementById('fr1_hmax').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if ((y =="")&&(z == "")&&(min == ""||max == "")) {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fr1.php?min='+min+'&max='+max+'&fas='+y+'&destinasi='+z);
  $.ajax({url: server+'_fr1.php?min='+min+'&max='+max+'&fas='+y+'&destinasi='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
      }//end for               
  }});//end ajax 
}

function _fr2(){
  hapus_menu();
  hapus_Semua();


  var y = document.getElementById('fr2_type').value;
  var z = document.getElementById('fr2_destinasi').value;
  var min = document.getElementById('fr2_hmin').value;
  var max = document.getElementById('fr2_hmax').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if ((y =="")&&(z == "")&&(min == ""||max == "")) {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fr2.php?min='+min+'&max='+max+'&tipe='+y+'&destinasi='+z);
  $.ajax({url: server+'_fr2.php?min='+min+'&max='+max+'&tipe='+y+'&destinasi='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
      }//end for               
  }});//end ajax 
}

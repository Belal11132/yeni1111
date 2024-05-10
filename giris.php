<?php


$gecici=$_POST['mail'];
$message = "HoşGeldin $gecici --> Tamam tuşuna basınca ana sayfaya yönlendirileceksiniz...";

if(!($_POST['mail']==""))
{
    if($_POST['mail']=="g221210592@sakarya.edu.tr" )
    {
       
        if(!($_POST['sifre']=="221210592"))
        {
            echo "sifre  yanlış";
            echo "<p> <a href='index.html'>&lt;GERİ DÖN&gt;</a></p> ";
        }
        else{
            echo "<script type='text/javascript'>alert('$message');</script>";
            header("Refresh: 0.1; url=http://localhost/yeni1111/index.html"); 
            
            exit();
        }
    }
    else{
        echo "e posta veya şifre hatalı";
        echo "<p> <a href='index.html'>&lt;GERİ DÖN&gt;</a></p> ";
    }

}else
{
    echo "değerleri doldurun";
}



?>
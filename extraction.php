<?php
date_default_timezone_set('Asia/Katmandu');
include('config.php');
$ApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=29.3088&lon=80.5911&units=metric&exclude=minutely,alerts&appid=" . $apiKey;


$ch = curl_init(); // CURL
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $ApiUrl);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$result = curl_exec($ch);
curl_close($ch);
$data = json_decode($result,true);

$currentTime = time();
$lat = $data['lat'];
$lon = $data['lon'];
$main = $data['current']['weather'][0]['main']; // inside the data extracts the required values from the keys
$desc = $data['current']['weather'][0]['description'];
$temp = round($data['current']['temp']);
$pressure = $data['current']['pressure'];
$humidity = $data['current']['humidity'];      // main data
$feels_like = $data['current']['feels_like'];
$wind_gust = $data['current']['wind_gust'];
$sunrise = date('H:i',($data['current']['sunrise']));
$sunset = date('H:i',($data['current']['sunset']));
$wind_speed = $data['current']['wind_speed'];
$wind_deg = $data['current']['wind_deg'];
$dew_point = $data['current']['dew_point'];
$visibility = $data['current']['visibility'];


$hour0 = round($data['hourly'][0]['temp']);
$hour1 = round($data['hourly'][1]['temp']);
$hour2 = round($data['hourly'][2]['temp']);     // future data
$hour3 = round($data['hourly'][3]['temp']);
$hour4 = round($data['hourly'][4]['temp']);
$hour5 = round($data['hourly'][5]['temp']);
$tomorrowTemp = round($data['daily'][1]['temp']['day']);
$afterTemp = round($data['daily'][2]['temp']['day']);


$d_tomorrow_img = $data['daily'][1]['weather'][0]['icon']; // gets the icons from official openweather documentation
$d_after_img = $data['daily'][2]['weather'][0]['icon'];
$hourly0_img = $data['hourly'][0]['weather'][0]['icon'];    // icon data
$hourly1_img = $data['hourly'][1]['weather'][0]['icon'];
$hourly2_img = $data['hourly'][2]['weather'][0]['icon'];
$hourly3_img = $data['hourly'][3]['weather'][0]['icon'];
$hourly4_img = $data['hourly'][4]['weather'][0]['icon'];
$hourly5_img = $data['hourly'][5]['weather'][0]['icon'];

// selects the data from sql db
$sql_for_data_getter = mysqli_query($conn, "SELECT * FROM `api` ORDER BY currentTime DESC limit 1") or die(mysqli_error($conn));
	if (mysqli_num_rows($sql_for_data_getter)>0) // if data exists
	{
		while ($rowdata = mysqli_fetch_object($sql_for_data_getter)) 
		{   
		    // if data over an hour old updates data
		    if (($rowdata->currentTime) <= ($currentTime - 3600)){
			$add_data = mysqli_query($conn, "INSERT INTO `api` (`lat`, `lon`, `currentTime`, `main`, `desc`, `temp`, `pressure`, `humidity`, `feels_like`, `sunrise`, `wind_gust`, `sunset`, `wind_speed`, `wind_deg`, `dew_point`, `visibility`, `hour0`, `hour1`, `hour2`, `hour3`, `hour4`, `hour5`, `tomorrowTemp`, `afterTemp`, `d_tomorrow_img`, `d_after_img`, `hourly0_img`, `hourly1_img`, `hourly2_img`, `hourly3_img`, `hourly4_img`, `hourly5_img`) VALUES ('$lat', '$lon', '$currentTime', '$main', '$desc', '$temp', '$pressure', '$humidity', '$feels_like', '$sunrise', '$wind_gust', '$sunset', '$wind_speed', '$wind_deg', '$dew_point', '$visibility', '$hour0', '$hour1', '$hour2', '$hour3', '$hour4', '$hour5', '$tomorrowTemp', '$afterTemp', '$d_tomorrow_img', '$d_after_img', '$hourly0_img', '$hourly1_img', '$hourly2_img', '$hourly3_img', '$hourly4_img', '$hourly5_img');
        		") or die(mysqli_error($conn));
		    }
		}
	}
	else // else adds data
	{
        $save_data = mysqli_query($conn, "INSERT INTO `api` (`lat`, `lon`, `currentTime`, `main`, `desc`, `temp`, `pressure`, `humidity`, `feels_like`, `sunrise`, `wind_gust`, `sunset`, `wind_speed`, `wind_deg`, `dew_point`, `visibility`, `hour0`, `hour1`, `hour2`, `hour3`, `hour4`, `hour5`, `tomorrowTemp`, `afterTemp`, `d_tomorrow_img`, `d_after_img`, `hourly0_img`, `hourly1_img`, `hourly2_img`, `hourly3_img`, `hourly4_img`, `hourly5_img`) VALUES ('$lat', '$lon', '$currentTime', '$main', '$desc', '$temp', '$pressure', '$humidity', '$feels_like', '$sunrise', '$wind_gust', '$sunset', '$wind_speed', '$wind_deg', '$dew_point', '$visibility', '$hour0', '$hour1', '$hour2', '$hour3', '$hour4', '$hour5', '$tomorrowTemp', '$afterTemp', '$d_tomorrow_img', '$d_after_img', '$hourly0_img', '$hourly1_img', '$hourly2_img', '$hourly3_img', '$hourly4_img', '$hourly5_img');
        ") or die(mysqli_error($conn));
	}


// selects data from db
$sql = "SELECT * FROM `api` ORDER BY currentTime DESC limit 1";
$result = mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($conn));

$emparray = array();
while($row =mysqli_fetch_assoc($result)) // adds data from db to empty array
    {
        $emparray[] = $row;
    }

echo json_encode($emparray); // encodes array in json and echo
mysqli_close($conn);

?>

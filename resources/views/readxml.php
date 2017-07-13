<html>
    <head>
        <title>Home</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script>
                        $(function(){
                            var auth = btoa('maxnet' + ":" + 'mne29th3');

                var xxxml = $.ajax
                ({
                    
                    type: "GET",
                    beforeSend: function(req) {
                        req.withCredentials = true; 
                        req.setRequestHeader('Access-Control-Allow-Origin', '*');
                        req.setRequestHeader('Authorization', "Basic " + auth); 
                    },
                    username: "maxnet",
                    password:"mne29th3",
                    url: "http://xml2.weather.gov.hk/V2/bulletins/SeveralDaysWeatherForecast_iso-8859-1.xml",
                    dataType: 'xml',
                    async: false,
                    success: function (data){
                    console.log(data); 
                    }
                });
            });
        </script>
    </head>
    <body>
        <div id="root" class="container">
            
        </div>
        
    </body>
</html>

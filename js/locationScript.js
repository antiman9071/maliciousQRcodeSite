const ipToken = 'c6673bb9678bb5';
fetch(`https://ipinfo.io/json?token=${ipToken}`)
    .then(res => res.json())
    .then(data => 
        {
            const info = `
            <br>City: ${data.city}
            <br>Region: ${data.region}
            <br>Country: ${data.country}
            <br>ISP: ${data.org}
            `;
            document.getElementById('ip-display').innerHTML = "<h3>Your IP is " + data.ip + "</h3>"
            document.getElementById('other-display').innerHTML = "<h4> some other info: " + info + "</h4>"
            document.getElementById('locationText-display').innerHTML = "<h3>Your location is " + data.loc + " see below for map</h3>"
            const url = "https://www.google.com/maps/place/"+data.loc;
            console.log(url)
            //const iframeElement = document.getElementById('location-display');
            //need google api key to add map functionality
            //iframeElement.src = url;
            document.getElementById('MapLink').href = url;
        }).catch(error => console.error("Error fetching IP info"));

import axios from 'axios';

const channelId = process.env.REACT_APP_CHANNEL_ID;
const apiKey = process.env.REACT_APP_API_KEY_YOUTUBE;

export const getChannelData = async () => {
    try {
        const res = await axios.get(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&part=snippet&part=id&part=contentOwnerDetails&part=statistics&id=${channelId}&key=${apiKey}`
        );
        return res.data.items;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const fetchLatestVideos = async (nb = 10) => {
    let resultats;
    await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${nb}&videoDuration=medium&order=date&type=video&key=${apiKey}`).then(async (result) => {
        resultats = result;
        return resultats
    });
    return resultats
};

export const fetchVideo = async () => {
    console.log(apiKey);
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=CqUV-hqIwBE&key=${apiKey}&part=snippet,contentDetails,statistics`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la requête YouTube :', error);
        return null;
    }
};

// export const test = async id => {
//     let valueReturn = []
//     await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=contentDetails&key=${apiKey}`).then(async (result) => {
//         for (let i = 0; i < result.data.items.length; i++) {
//             let convertedValue = convertDuration(result.data.items[i].contentDetails.duration)
//             if(convertedValue.length < 5 && (convertedValue.indexOf("0") > 0 || convertedValue.indexOf("0") === -1)) {
//                 valueReturn.push(result.data.items[i])
//                 console.log(i)
//             }

//             if (i === 29) {
//                 return valueReturn
//             }
//         }
//     })
//     return valueReturn
// }

export const fetchLiveYtb = async() =>{
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`);
      
      return res.data.items[0].id.videoId;
    } catch (error) {
      console.error(error);
    }
};

/*
function convertDuration(t){
    //dividing period from time
    var	x = t.split('T'),
        duration = '',
        time = {},
        period = {},
        //just shortcuts
        s = 'string',
        v = 'variables',
        l = 'letters',
        // store the information about ISO8601 duration format and the divided strings
        d = {
            period: {
                string: x[0].substring(1,x[0].length),
                len: 4,
                // years, months, weeks, days
                letters: ['Y', 'M', 'W', 'D'],
                variables: {}
            },
            time: {
                string: x[1],
                len: 3,
                // hours, minutes, seconds
                letters: ['H', 'M', 'S'],
                variables: {}
            }
        };
    //in case the duration is a multiple of one day
    if (!d.time.string) {
        d.time.string = '';
    }

    for (var i in d) {
        var len = d[i].len;
        for (var j = 0; j < len; j++) {
            d[i][s] = d[i][s].split(d[i][l][j]);
            if (d[i][s].length>1) {
                d[i][v][d[i][l][j]] = parseInt(d[i][s][0], 10);
                d[i][s] = d[i][s][1];
            } else {
                d[i][v][d[i][l][j]] = 0;
                d[i][s] = d[i][s][0];
            }
        }
    }
    period = d.period.variables;
    time = d.time.variables;
    time.H += 	24 * period.D +
        24 * 7 * period.W +
        24 * 7 * 4 * period.M +
        24 * 7 * 4 * 12 * period.Y;

    if (time.H) {
        duration = time.H + ':';
        if (time.M < 10) {
            time.M = '0' + time.M;
        }
    }

    if (time.S < 10) {
        time.S = '0' + time.S;
    }

    duration += time.M + ':' + time.S;
    return duration
}
*/
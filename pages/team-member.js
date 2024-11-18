// async function fetchData() {
//     try {
//         let response = await fetch("../data.json");
//         if (!response.ok) {
//             throw new Error("no data");
//         }
//         let jsonData = await response.json();
//         console.log(jsonData);
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log("ended");
//     }
// }

// fetchData();
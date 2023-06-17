
export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '3151f65dbcmshab8eb749aeb37f7p1f87dejsn6d01d7af96c3',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' , {
        headers: headers,
    });

    const result = await response.json();
    return result;
}
export default async function handler(req, res) {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY; // Ambil API key dari .env
    const city = req.query.city || 'Malang'; // Default city jika tidak ada query

    if (!city) {
        return res.status(400).json({ error: 'Nama kota tidak boleh kosong' });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            return res.status(404).json({ error: 'Kota tidak ditemukan' });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Gagal mengambil data cuaca' });
    }
}
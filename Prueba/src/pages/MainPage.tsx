import { useEffect, useState } from "react";

const MainPage = () => {

    const [habitaciones, setHabitaciones] = useState([]);

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        tipoEstancia: "", // "Estancia Corta" o "Estancia Larga"
        fechaInicio: "",
        fechaFin: "",
        habitacionesID: "",
        valorHora: ""
    });

    useEffect(() => {
        fetch("https://localhost:7122/api/Habitaciones/ObtenerActivas")
            .then(res => res.json())
            .then(data => setHabitaciones(data))
            .catch(err => console.error("Error cargando habitaciones:", err));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            habitacionesID: parseInt(formData.habitacionesID),
            habitaciones: {
                id: parseInt(formData.habitacionesID),
            },
            clienteId: 0,
            cliente: {
                id: 1,
            },
            descuentoId: 0,
            descuento: {
                id: 1,
            },
            tipoEstancia: formData.tipoEstancia,
            estado: "activo",
            totalCalculado: parseFloat(formData.valorHora),
            fechaRegistro: new Date(formData.fechaInicio),
            fechaFinal: new Date(formData.fechaFin)
        };

        try {
            const res = await fetch("https://localhost:7122/api/Registro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "*/*"
                },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

            const result = await res.json();
            alert("Reserva registrada exitosamente!");
            console.log(result);
        } catch (err) {
            console.error("Error al registrar la reserva:", err);
        }
    };


    return (
        <div className="flex flex-col min-h-screen font-sans">
            <header className="bg-blue-600 text-white text-center p-4">
                <h1 className="text-2xl font-bold">Bienvenido a la página principal</h1>
            </header>

            <main className="bg-gray-100 text-gray-800">
                <div className="container mx-auto p-4">
                    <h2 className="text-xl font-semibold mb-4">Habitaciones activas</h2>
                    <table className="min-w-full table-auto border-collapse border border-white">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-white px-4 py-2">ID</th>
                                <th className="border border-white px-4 py-2">Ubicación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {habitaciones.map((hab: any) => (
                                <tr key={hab.id}>
                                    <td className="border border-white px-4 py-2">{hab.id}</td>
                                    <td className="border border-white px-4 py-2">{hab.ubicacion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className="container mx-auto p-4">
                    <h2 className="text-xl font-semibold mb-4">Generar Reservas</h2>
                    <div className="container mx-auto p-4">
                        <h2 className="text-xl font-semibold mb-4">Generar Reservas</h2>
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <form className="w-full max-w-lg" onSubmit={handleSubmit} >
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Nombre"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Correo Electrónico"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Tipo Estancia:
                                    </label>
                                    <div>
                                        <label htmlFor="estanciaCorta" className="mr-2">
                                            Estancia Corta
                                            <input
                                                type="checkbox"
                                                id="estanciaCorta"
                                                placeholder="Correo Electrónico"
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </label>
                                        <label htmlFor="estanciaLarga" className="mr-2">
                                            Estancia Larga
                                        </label>
                                        <input
                                            type="checkbox"
                                            id="estanciaLarga"
                                            placeholder="Correo Electrónico"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />

                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Fecha de Inicio:
                                    </label>
                                    <input
                                        type="date"
                                        id="fechaInicio"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Fecha de Fin:
                                    </label>
                                    <input
                                        type="date"
                                        id="fechaFin"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Habitaciones:
                                    </label>
                                    <select
                                        id="habitaciones"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        {habitaciones.map((hab: any) => (
                                            <option key={hab.id} value={hab.id}>
                                                {hab.ubicacion}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        ValorHora:
                                    </label>
                                    <input
                                        type="text"
                                        id="number"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Generar Reserva
                                </button>
                            </form>


                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white text-center  p-4">
                <p>© {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default MainPage;

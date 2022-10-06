import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const UserData = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    useEffect(() => {
        if (data.length !== 0) {
            setFilterData(data)
        }
    }, [data])

    const searchBox = (event) => {
        const serachData = event.target.value;
        const find = data.filter(d => d.name.toLowerCase().includes(serachData.toLowerCase()))
        setFilterData(find)

    }
    const searchBox2 = (event) => {
        const serachData = event.target.value;
        const find = data.filter(d => d.email.toLowerCase().includes(serachData.toLowerCase()))
        setFilterData(find)

    }


    return (
        <div className='container'>
            <h2 className='text-center mt-3'>User Information</h2>
            <div className=' mt-4'>
                <div className='d-flex justify-content-center align-items-center'>
                    <p className='pt-3 pe-2'>Name:</p>
                    <div style={{ backgroundColor: '#989898' }} className='d-flex align-items-center ps-2 py-1 '>
                        <MagnifyingGlassIcon style={{ heigth: '25px', width: '25px', color: 'white' }} className="" />
                        <input onChange={searchBox} style={{ backgroundColor: '#989898', outline: 'none', color: 'white' }} className='border border-0 outline-none' type="text" />

                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <p className='pt-3 pe-2'>Email:</p>
                    <div style={{ backgroundColor: '#989898' }} className='d-flex align-items-center ps-2 py-1 '>
                        <MagnifyingGlassIcon style={{ heigth: '25px', width: '25px', color: 'white' }} className="" />
                        <input onChange={searchBox2} style={{ backgroundColor: '#989898', outline: 'none', color: 'white' }} className='border border-0 outline-none' type="text" />

                    </div>
                </div>



            </div>


            <table className='table table-dark table-striped table-border mt-5'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company Name</th>
                        <th>Zipcode</th>


                    </tr>

                </thead>

                <tbody>
                    {
                        filterData.map(d => <tr>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.company.name}</td>
                            <td>{d.address.zipcode}</td>
                        </tr>)
                    }

                </tbody>

            </table>


        </div>
    );
};

export default UserData;
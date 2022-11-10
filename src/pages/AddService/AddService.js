import React from 'react';

const AddService = () => {

    const handlesubmit = event => {
        event.preventDefault()
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const price = form.price.value;
        const message = form.message.value;
        const service = {
            img: photo,
            title: name,
            price: price,
            description: message
        }
        console.log(service)

        fetch('https://optic-thirst-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('add successfully')
                    form.reset()
                }
            })
            .catch(error => console.error(error))

    }

    return (
        <div className='container m-auto my-10'>
            <div className='text-center mb-10'>
                <h3 className='text-4xl font-bold'>Add service</h3>
                <p className='pt-5 text-1xl uppercase'> Enter your service and add add</p>
            </div>
            <form onSubmit={handlesubmit}>
                <div>
                    <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered w-full" required />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5'>
                        <input name='name' type="text" placeholder="Enter your service name" className="input input-bordered w-full" required />
                        <input name='price' type="number" placeholder="enter price" className="input input-bordered w-full" />
                    </div>
                    <textarea name='message' className="textarea textarea-bordered w-full" placeholder="details" required></textarea>
                    <div className='text-center mt-5'>
                        <input type="submit" className="btn btn-active btn-ghost m-auto" value="Add Service" required />
                    </div>
                </div>
            </form>
        </div >
    );
};

export default AddService;
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const {data: carParts, isLoading} = useQuery('purchase', () => fetch(`https://sheltered-castle-28994.herokuapp.com/purchase`).then(res => res.json()) )

    const imageStorageKey = '9715c8f2537948bb6c9f89a94de47be9';

      const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const purchase = {
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    availableQuantity: data.availableQuantity,
                    minimumQuantity: data.minimumQuantity,
                    img: img
                }

                fetch(`https://sheltered-castle-28994.herokuapp.com/purchase`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(purchase)
                })
                .then(res => res.json())
                .then(inserted => {
                    console.log('purchase', inserted)
                    reset();
                })
            }
        })

        console.log('DATA', data);
      };

    //   if(isLoading){
    //      return <Loading></Loading>
    //   }
    return (
        <div className='ml-28'>
            <h2 className='text-2xl uppercase ml-12'> add a product</h2>
            <form  onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                className="input input-bordered w-full max-w-xs"
                {...register("price", {
                  required: {
                    value: true,
                    message: "price is Required",
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="description"
                className="input input-bordered w-full max-w-xs"
                {...register("description", {
                  required: {
                    value: true,
                    message: "description is Required",
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full max-w-xs"
                {...register("availableQuantity", {
                  required: {
                    value: true,
                    message: "availableQuantity is Required",
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Minimum Order</span>
              </label>
              <input
                type="text"
                placeholder="Minimum Order"
                className="input input-bordered w-full max-w-xs"
                {...register("minimumQuantity", {
                  required: {
                    value: true,
                    message: "minimumQuantity is Required",
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                placeholder="img"
                className="input input-bordered w-full max-w-xs"
                {...register("img", {
                  required: {
                    value: true,
                    message: "file is Required",
                  },
                })}
              />
            </div>

            <input
              className="btn w-full mt-4 max-w-xs text-white"
              type="submit"
              value="Add Product"
            />
          </form>
        </div>
    );
};

export default AddProduct;
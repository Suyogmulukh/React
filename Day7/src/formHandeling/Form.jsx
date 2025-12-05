import { useForm } from "react-hook-form"

const Form = () => {
    const {
    register,
    handleSubmit,
    setError,
    formState: { errors , isSubmitting},
    } = useForm()
    
    const delay = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, d * 1000);
        })
    }

    const onSubmit = async(data) => {
        await delay(2)
            console.log(JSON.stringify(data))
    }

  return (
      <div>
          {isSubmitting && <div>Loading...</div>}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-red-200 h-80 w-1/2 justify-center items-center ">
              <input placeholder="Username" type="text" className="p-4 bg-green-300 w-1/3 text-center "{...register("username", 
                  {
                      required: { value: true, message: "this field are required" },
                      maxLength: { value: 10, message: "Max Lenght is 10" },
                      minLength: { value: 4, message: "Min lenght is 4" }
                  })} />
              {errors.username && <div className="text-red-500 font-medium">{errors.username.message }</div>}

              <input placeholder="password" type="password" className="p-4 bg-green-300 mt-5 w-1/3 text-center " {...register("password", 
               {
                      required: { value: true, message: "this field are required" },
                      maxLength: { value: 15, message: "Max Lenght is 15" },
                      minLength: { value: 6, message: "Min lenght is 6" }
                  })} />
              {errors.password && <div className="text-red-500 font-medium">{errors.password.message }</div>}

              <input disabled={isSubmitting} type="submit" value="submit" className="px-4 py-6 bg-gray-500 mt-5 w-1/3 text-center "/>
          </form>
    </div>
  )
}

export default Form

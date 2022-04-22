import React from "react";
import { useForm } from "react-hook-form";

export default function TestForm() {
    const { register, formState: { errors }, handleSubmit ,onSubmit} = useForm();

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <main id="main" class="main">
            <br />
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} />
                {errors.firstName?.type === 'required' && "First name is required"}

                <input {...register("lastName", { required: true })} />
                {errors.lastName && "Last name is required"}

                <input type="submit" />
            </form>
        </main>

    );
}
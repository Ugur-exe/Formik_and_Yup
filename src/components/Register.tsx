import { useFormik } from "formik";
import { registerFormSchemas } from "../schemas/RegisterFormSchemas";

function RegisterForm() {
    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: false,
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 5));
        },
        validationSchema: registerFormSchemas
    });
    console.log(errors);


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email giriniz"
                        value={values.email}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.email && <p className="input-error"> {errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="age">Yaş</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="Yaşınızı giriniz"
                        value={values.age}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.age && <p className="input-error">{errors.age}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Şifre</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Şifrenizi Giriniz"
                        value={values.password}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.password && <p className="input-error">{errors.password}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Şifre Tekrar</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Şifrenizi Tekrar Giriniz"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.confirmPassword && <p className="input-error">{errors.confirmPassword}</p>}
                </div>
                <div className="form-group form-checkbox">
                    <input
                        type="checkbox"
                        id="term"
                        name="term"
                        checked={values.term}
                        onChange={handleChange}
                    />
                    <label htmlFor="term">Kullanıcı Sözleşmesini kabul ediyorum</label>

                    {errors.term && <p className="input-error">{errors.term}</p>}
                </div>
                <button type="submit" className="submit-btn">Gönder</button>
            </form>
        </div>
    );
}

export default RegisterForm;

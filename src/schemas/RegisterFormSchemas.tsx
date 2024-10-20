import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup.string()
        .email("Geçerli email adresi giriniz")
        .required("Email adresi zorunlu"),
    age: yup.number()
        .positive("Pozitif bir değer giriniz")
        .integer("Tam sayı giriniz")
        .required("Yaş alanı zorunlu"),
    password: yup.string()
        .required("Şifre alanı zorunlu"),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], "Şifreler eşleşmiyor")  // Doğru kullanım bu şekilde
        .required("Şifre tekrarı zorunlu"),
    term: yup.boolean()
        .oneOf([true], "Lütfen kutucuğu onaylayınız")
});

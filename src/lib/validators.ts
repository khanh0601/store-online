import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
// import { formatNumberWithDecimal } from "./utils";

// const currency = z
//   .string()
//   .refine(
//     (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
//     "Price must have exactly two decimal places"
//   );

// Schema for signing users in
export const signInFormSchema = z.object({
    email: z
        .string()
        .nonempty("Bắt buộc nhập Email")
        .email("Vui lòng nhập đúng địa chỉ Email"),
    password: z.string().min(6, "Mật khẩu ít nhất phải dài 6 kí tự"),
    rememberMe: z.boolean().optional(),
});

// Schema for signing users in
export const signUpFormSchema = z.object({
    firstName: z
        .string()
        .nonempty({ message: "Vui lòng nhập họ của bạn" })
        .min(2, "Họ của bạn ít nhất phải 2 kí tự"),
    lastName: z
        .string()
        .nonempty({ message: "Vui lòng nhập tên của bạn" })
        .min(2, "Tên của bạn ít nhất phải có 2 kí tự"),
    email: z
        .string()
        .nonempty("Vui lòng nhập email")
        .email("Vui lòng nhập đúng địa chỉ email"),
    inviteCode: z.string().optional(),
    password: z
        .string()
        .min(8, "Mật khẩu ít nhất phải 8 kí tự")
        .regex(/[a-z]/, "Mật khẩu phải bao gồm ít nhất 1 chữ thường")
        .regex(/[A-Z]/, "Mật khẩu phải bao gồm ít nhất 1 chữ hoa")
        .regex(
            /^(?=.*[0-9!@#$%^&*(),.?":{}|<>]).*$/,
            "Mật khẩu phải bao gồm ít nhất 1 kí tự số hoặc kí tự đặc biệt"
        ),
    phoneNumber: z
        .string()
        .nonempty("Vui lòng nhập số điện thoại")
        .refine(isValidPhoneNumber, { message: "Số điện thoại sai" }),
    consent: z.boolean().refine((val) => val === true, {
        message: "Bạn phải đồng ý điều khoản và chính sách của chúng tôi để tiếp tục",
    }),
});

export const resendVerifyUserSchema = z.object({
    email: z
        .string()
        .nonempty("Please enter your email")
        .email("Please provide a valid email address"),
});

// Schema for payment method schema
export const paymentResultSchema = z.object({
    id: z.string(),
    status: z.string(),
    email_address: z.string(),
    pricePaid: z.string(),
});

// Schema for shipping address
export const updateProfileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().min(2, "Email must be at least 2 characters long"),
});

// User schema based on the User interface
export const userSchema = z.object({
    email: z.string().email("Invalid email address").nonempty("Email required"),
    firstName: z.string().nonempty("First name is required"),
    id: z.string(),
    lastName: z.string().nonempty("Last name is required"),
    phoneNumber: z.string().nonempty("Phone number is required"),
    createdDate: z.string().nonempty("Created date is required"),
});

export const forgotPasswordFormSchema = z.object({
    email: z.string().email("Invalid email address").nonempty("Email required"),
});

// UpdatePasswordFormValue schema based on the UpdatePasswordFormValue type
export const updatePasswordFormSchema = z
    .object({
        newPassword: z
            .string()
            .min(8, "Password must be at least 8 characters long")
            .regex(
                /[a-z]/,
                "Password must include at least one lowercase letter"
            )
            .regex(
                /[A-Z]/,
                "Password must include at least one uppercase letter"
            )
            .regex(
                /^(?=.*[0-9!@#$%^&*(),.?":{}|<>]).*$/,
                "Password must include at least one number or special character"
            ),
        confirmPassword: z
            .string()
            .min(8, "Confirm Password must be at least 8 characters long")
            .regex(
                /[a-z]/,
                "Confirm Password must include at least one lowercase letter"
            )
            .regex(
                /[A-Z]/,
                "Confirm Password must include at least one uppercase letter"
            )
            .regex(
                /^(?=.*[0-9!@#$%^&*(),.?":{}|<>]).*$/,
                "Confirm Password must include at least one number or special character"
            ),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

import mongoose, {Document, Model, Schema} from "mongoose";

// User interface
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    emailVerified: Date | null;
    image?: string;
    resetToken?: string;
    resetTokenExpiry?: Date;
    verificationToken?: string;
    lastLogin?: Date;
    createdAt: Date;
    updatedAt: Date;

    // Add the toSafeObject method to the interface
    toSafeObject(): Omit<IUser, 'password' | 'resetToken' | 'resetTokenExpiry' | 'verificationToken'>;
}

// Strict schema definition with validation
const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            minlength: [2, "Name must be at least 2 characters"],
            maxlength: [50, "Name must be less than 50 characters"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            lowercase: true,
            trim: true,
            match: [
                /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                "Please enter a valid email address",
            ],
            // We'll use the explicit index below instead of this index
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters"],
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
        emailVerified: {
            type: Date,
            default: null,
        },
        image: {
            type: String,
        },
        resetToken: {
            type: String,
        },
        resetTokenExpiry: {
            type: Date,
        },
        verificationToken: {
            type: String,
        },
        lastLogin: {
            type: Date,
        },
    },
    {
        timestamps: true, // Automatically create createdAt and updatedAt
        collection: "users", // Explicitly name the collection
    }
);

// Add indexes for performance
userSchema.index({email: 1}, {unique: true});
userSchema.index({resetToken: 1}, {sparse: true});
userSchema.index({verificationToken: 1}, {sparse: true});

// Virtual for user's full profile URL (example)
userSchema.virtual("profileUrl").get(function (this: IUser) {
    return `/users/${this._id}`;
});

// Helper method to safely return user data without sensitive fields
userSchema.methods.toSafeObject = function () {
    const obj = this.toObject();
    delete obj.password;
    delete obj.resetToken;
    delete obj.resetTokenExpiry;
    delete obj.verificationToken;
    return obj;
};

// Check if model already exists (for Next.js hot reloading)
export const User = (mongoose.models.User ||
    mongoose.model<IUser>("User", userSchema)) as Model<IUser>;

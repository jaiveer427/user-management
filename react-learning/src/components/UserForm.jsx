import { useState } from "react";

const UserForm = ({ onSubmit, initialData = {} }) => {
    const [name, setName] = useState(initialData.name || "");
    const [email, setEmail] = useState(initialData.email || "");
    const [role, setRole] = useState(initialData.role || "User");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            alert("All fields required");
            return;
        }

        onSubmit({ name, email, role });

        setName("");
        setEmail("");
        setRole("User");
    };

    return (
        <form onSubmit={handleSubmit} className="card">
            <div className="flex">
                <input
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option>User</option>
                    <option>Admin</option>
                    <option>Manager</option>
                </select>

                <button className="btn-primary">
                    Save
                </button>
            </div>
        </form>
    );
}

export default UserForm;
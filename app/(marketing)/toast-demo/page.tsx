import ToastDemo from "@/components/ui/ToastDemo";

export const metadata = {
    title: "Toast Notification Demo",
    description: "A demonstration of toast notifications in Modern Auth"
};

export default function ToastDemoPage() {
    return (
        <div className="container mx-auto px-4">
            <div className="card">
                <ToastDemo/>
            </div>
        </div>
    );
}
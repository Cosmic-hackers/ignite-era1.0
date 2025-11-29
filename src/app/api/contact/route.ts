import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), "src", "data", "submissions.json");

        // Read existing data
        let submissions = [];
        try {
            const fileData = fs.readFileSync(filePath, "utf-8");
            submissions = JSON.parse(fileData);
        } catch (error) {
            // If file doesn't exist or is empty, start with empty array
            submissions = [];
        }

        // Add new submission
        const newSubmission = {
            id: Date.now(),
            name,
            email,
            message,
            date: new Date().toISOString(),
        };

        submissions.push(newSubmission);

        // Write back to file
        fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

        return NextResponse.json({ success: true, data: newSubmission });
    } catch (error) {
        console.error("Error saving submission:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

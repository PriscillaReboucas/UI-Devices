type Data = {
    version: string,
    devices: []
}

export async function retrieve (): Promise<Data> {
    const response = await fetch('https://static.ui.com/fingerprint/ui/public.json');
    const data = await response.json();
    return data;
};
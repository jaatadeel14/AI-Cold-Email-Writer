        function toggleTheme() {
            const body = document.body;
            const icon = document.getElementById('themeIcon');
            if (body.classList.contains('dark')) {
                body.classList.replace('dark', 'light');
                icon.classList.replace('fa-moon', 'fa-sun');
                icon.classList.replace('text-purple-400', 'text-orange-500');
            } else {
                body.classList.replace('light', 'dark');
                icon.classList.replace('fa-sun', 'fa-moon');
                icon.classList.replace('text-orange-500', 'text-purple-400');
            }
        }

        async function generateOutreach() {
            const clientInput = document.getElementById('clientName');
            const emailInput = document.getElementById('clientEmail');
            const serviceInput = document.getElementById('service');

            const client = clientInput.value;
            const email = emailInput.value;
            const service = serviceInput.value;

            const btn = document.getElementById('btn');
            const btnText = document.getElementById('btnText');
            const icon = document.getElementById('icon');
            const loader = document.getElementById('loader');
            const resultBox = document.getElementById('resultBox');
            const content = document.getElementById('emailContent');

            if (!client || !service || !email) {
                alert("Please fill all fields");
                return;
            }

            btn.disabled = true;
            btnText.innerText = "Processing...";
            icon.classList.add('hidden');
            loader.classList.remove('hidden');

            try {
                const response = await fetch('', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        clientName: client,
                        clientEmail: email,
                        service: service
                    })
                });
                const data = await response.text();

                resultBox.classList.remove('hidden');
                content.innerText = data;

                clientInput.value = "";
                emailInput.value = "";
                serviceInput.value = "";

            } catch (e) {
                resultBox.classList.remove('hidden');
                content.innerText = "Network Error. Check your connection.";
            } finally {
                btn.disabled = false;
                btnText.innerText = "Execute Draft";
                icon.classList.remove('hidden');
                loader.classList.add('hidden');
            }
        }

        function copyEmail() {
            const text = document.getElementById('emailContent').innerText;
            navigator.clipboard.writeText(text);
            const btn = event.target;
            btn.innerText = "Copied!";
            setTimeout(() => btn.innerText = "Copy File", 2000);
        }
   
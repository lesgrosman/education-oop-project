export default class Form {
    constructor(form) {
        this.forms = document.querySelectorAll(form);
        this.messages = {
            loading: 'Loading',
            success: 'We will call you back!',
            failure: 'Opps.. Something goes wrong'
        };
        this.path = 'assets/question.php';
        this.mails = document.querySelectorAll('input[name="email"]');       

    }

    async postData(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });
    
        if (!res.ok) {
            throw new Error('Error');
        }
    
        return await res.text();
    
    }

    init() {
        this.mails.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^a-z0-9]/ig, '');
            });
        });

        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey
                `;
                form.parentNode.appendChild(statusMessage);
                statusMessage.textContent = this.messages.loading;
                

                const formData = new FormData(form);
    
                this.postData(this.path, formData)
                .then(res => {
                console.log(res);
                statusMessage.textContent = this.messages.success;
                })
                .catch(() => {
                    console.log('Error');
                    statusMessage.textContent = this.messages.failure;

                })
                .finally(() => {
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                });
            });
        });
        
    }


}
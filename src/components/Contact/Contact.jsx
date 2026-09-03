import { useState } from 'react';
import './Contact.css';
import instagramIcon from '../../assets/instagram.png';
import whatsappIcon from '../../assets/whatsapp.png';
import emailIcon from '../../assets/email.png';

function Contact() {
  // guarda os valores dos campos
  const [formData, setFormData] = useState({
    name: '',
    user_email: '',
    telephone: '',
    reason: '',
    message: '',
  });

  // controla quais campos estão inválidos
  const [errors, setErrors] = useState({
    name: false,
    reason: false,
  });

  // atualiza os dados do formulário conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Se o usuário começar a digitar, remove o aviso de erro do campo
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  // validação e envio (mensagemUsuario)
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento padrão da página

    let hasError = false;
    const newErrors = { name: false, reason: false };

    // Validação do campo Nome
    if (!formData.name.trim()) {
      //se o campo de name estiver vazio
      newErrors.name = true;
      hasError = true;
    }

    // Validação do campo Motivo
    if (!formData.reason.trim()) {
      newErrors.reason = true;
      hasError = true;
    }

    setErrors(newErrors);

    // Se houver erros, cancela a execução
    if (hasError) return;

    // Monta a mensagem para o WhatsApp
    const { name, user_email, telephone, reason, message } = formData;
    const number = '554788286146'; // DDI (55) + DDD (47) + Número

    let text = `Olá, Aline! Gostaria de agendar uma consulta.\n\nNome: ${name}\nMotivo: ${reason}`;

    if (user_email) text += `\nE-mail: ${user_email}`;
    if (telephone) text += `\nContato: ${telephone}`;
    if (message) text += `\n\nMensagem: ${message}`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="row row-contact">
          <div className="col">
            <h3 className="margin-text">
              <strong>Vamos conversar?</strong>
            </h3>
            <p className="margin-text">
              Há encontros que mudam a vida. Se fizer sentido para você, eu
              posso te acompanhar nesse caminho com presença, escuta e
              acolhimento.
            </p>
            <div className="virtual-contact">
              <a
                href="https://www.instagram.com/psi.alinealves/"
                target="_blank"
              >
                <img src={instagramIcon} alt="Ícone do Instagram" />
                <span>psi.alinealves</span>
              </a>
              <a
                href="https://wa.me/554788286146?text=Olá%20Aline%2C%20conheci%20você%20através%20do%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20consulta"
                target="_blank"
              >
                <img src={whatsappIcon} alt="Ícone do whatsapp" />
                <span>47 98828-6146</span>
              </a>
              <a href="mailto:psi.alinealves@gmail.com" target="_blank">
                <img src={emailIcon} alt="Ícone do e-mail" />
                <span>psi.alinealves@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="col">
            <div className="container-form">
              <form
                action="#"
                method="post"
                target="_blank"
                onSubmit={handleSubmit}
              >
                <div className="row row-form">
                  <div className="col">
                    <label htmlFor="name" className="form-label">
                      Nome completo*
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div
                        className="invalid-feedback"
                        style={{ display: 'block' }}
                      >
                        Preencha o campo Nome completo.
                      </div>
                    )}
                  </div>

                  <div className="col">
                    <label htmlFor="user-email" className="margin-spacing">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="user-email"
                      className="form-control"
                      name="user_email"
                      placeholder="E-mail para contato"
                      value={formData.user_email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row row-form">
                  <div className="col">
                    <label htmlFor="telephone">Telefone/WhatsApp</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      pattern="\d{2}\ \d{5}-\d{4}$"
                      className="form-control"
                      placeholder="DDD 99999-9999"
                      value={formData.telephone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col">
                    <label htmlFor="reason" className="form-label">
                      Motivo do contato*
                    </label>
                    <select
                      name="reason"
                      id="reason"
                      className={`form-control ${errors.reason ? 'is-invalid' : ''}`}
                      value={formData.reason}
                      onChange={handleChange}
                    >
                      <option value="">Selecione...</option>
                      <option value="Comportamento alimentar">
                        Comportamento Alimentar
                      </option>
                      <option value="Autoestima">Autoestima</option>
                      <option value="Relacionamentos">Relacionamentos</option>
                      <option value="Traumas">Traumas</option>
                      <option value="Outros">Outros</option>
                    </select>
                    {errors.reason && (
                      <div
                        className="invalid-feedback"
                        style={{ display: 'block' }}
                      >
                        Selecione o motivo do contato.
                      </div>
                    )}
                  </div>
                </div>

                <div className="row row-form">
                  <div className="col">
                    <label htmlFor="message" className="margin-spacing">
                      Mensagem
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Sinta-se à vontade para compartilhar brevemente o que trouxe você até aqui."
                      style={{ height: '100px' }}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="send-button">
                  <button type="submit" className="btn-form btn-to-schedule">
                    Enviar mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

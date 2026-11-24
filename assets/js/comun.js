/* ==========================================================
   CONFIGURACIÓN — cambia SOLO estas líneas.
   Se aplican a los códigos QR y a todos los enlaces
   de WhatsApp de todas las páginas.
   ========================================================== */
var CONFIG = {
  whatsapp:        "34625168057",                     // número de WhatsApp, sin + ni espacios
  enlaceQR:        "https://wa.me/qr/GKA3CE4V32CIO1", // lo que codifican los dos QR
  mensajeWhatsApp: "Hola, quiero unirme a Juventud Ya!",
  mensajeDifusion: "Hola, quiero unirme al canal de difusión de Juventud Ya!"
};
/* ========================================================== */

document.addEventListener("DOMContentLoaded", function(){
  /* Enlaces de WhatsApp con el mensaje ya escrito */
  var waBase = "https://wa.me/" + CONFIG.whatsapp;
  document.querySelectorAll("[data-wa]").forEach(function(el){
    var msg = el.getAttribute("data-wa") === "difusion" ? CONFIG.mensajeDifusion : CONFIG.mensajeWhatsApp;
    el.setAttribute("href", waBase + "?text=" + encodeURIComponent(msg));
  });

  /* Menú desplegable "Nuestra Visión" */
  document.querySelectorAll(".nav-menu").forEach(function(menu){
    var btn = menu.querySelector(".nav-menu-btn");
    function setOpen(open){
      menu.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    btn.addEventListener("click", function(e){
      e.stopPropagation();
      setOpen(!menu.classList.contains("is-open"));
    });
    document.addEventListener("click", function(e){
      if (!menu.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", function(e){
      if (e.key === "Escape" && menu.classList.contains("is-open")){
        setOpen(false);
        btn.focus();
      }
    });
    menu.addEventListener("focusout", function(e){
      if (!menu.contains(e.relatedTarget)) setOpen(false);
    });
  });
});

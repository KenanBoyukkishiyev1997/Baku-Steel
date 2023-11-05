export function CertificatToggle() {

    $(document).ready(function () {
        $(".toggle-link").click(function (e) {
            e.preventDefault();
            var targetId = $(this).data("target");
            $("#" + targetId).slideToggle();
            var isActive = $(this).find('.certificat__box-faqTitle').hasClass('active');

            if (isActive) {
                // If it has the 'active' class, remove it
                $(this).find('.certificat__box-faqTitle').removeClass('active');
            } else {
                // If it doesn't have the 'active' class, add it
                $(this).find('.certificat__box-faqTitle').addClass('active');
            }

        })

    });

}
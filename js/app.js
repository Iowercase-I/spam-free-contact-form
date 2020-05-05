$(document).foundation();

//get original button values for donation support
var button_to = $('#demo_button').data("to");
var button_amount = $('#demo_button').data("amount");
var button_currency = $('#demo_button').data("currency");
var button_label = $('#demo_button').data("label");
var button_client_identifier = $('#demo_button').data("client-identifier");
var button_button_id = $('#demo_button').data("button-id");
var button_button_data = $('#demo_button').data("button-data");
var button_type = $('#demo_button').data("type");
var button_on_payment = $('#demo_button').data("on-payment");


    //submit form after payment
    function myCustomCallback (payment) {
      document.getElementById('myForm').submit();
    };

    //donation support code
    $('#donation_checkbox').change(function(){
        if (this.checked) {
          $('#donate').show();
          const div = document.getElementById('demo_button');
          moneyButton.render(div, {
            amount: $('#donation_amount').val(),
            to: button_to,
            currency: $('#donation_currency').val(),
            label: button_label,
            clientIdentifier: button_client_identifier,
            buttonId: button_button_id,
            type: button_type,
            onPayment: button_on_payment
          });
        }
        else {
          $("#donate").hide();
          $('#donation_currency').val('USD');
          $('#donation_amount').val('.001');
          const div = document.getElementById('demo_button');
          moneyButton.render(div, {
            amount: button_amount,
            to: button_to,
            currency: button_currency,
            label: button_label,
            clientIdentifier: button_client_identifier,
            buttonId: button_button_id,
            type: button_type,
            onPayment: button_on_payment
          });
        }
      });

      $('#donation_amount').change(function(){
        const div = document.getElementById('demo_button');
        moneyButton.render(div, {
          amount: $('#donation_amount').val(),
          to: button_to,
          currency: $('#donation_currency').val(),
          label: button_label,
          clientIdentifier: button_client_identifier,
          buttonId: button_button_id,
          type: button_type,
          onPayment: button_on_payment
        });
      });
      $('#donation_currency').change(function(){
        const div = document.getElementById('demo_button');
        moneyButton.render(div, {
          amount: $('#donation_amount').val(),
          to: button_to,
          currency: $('#donation_currency').val(),
          label: button_label,
          clientIdentifier: button_client_identifier,
          buttonId: button_button_id,
          type: button_type,
          onPayment: button_on_payment
        });
      });

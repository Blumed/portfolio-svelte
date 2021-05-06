<h1 class="page-title">Contact</h1>
<section>
    <h3>Leave a message after the . . . . beep</h3>
    <form action="//formspree.io/cullan.luther@gmail.com" method="POST">
        <div class="clear">
            <div class="grouped-field">
                <label for="frmName">Full Name</label>
                <input class="-m-break" type="text" id="frmName" name="name" required autocomplete="name" focus>
            </div>
            <div class="grouped-field">
                <label for="frmEmail">Email</label>
                <input class="-m-break" type="email" id="frmEmail" name="_replyto" required autocomplete="email">
            </div>
            <input type="hidden" name="_subject" value="New Blog Submission!" />
            <div class="grouped-field">
                <label for="frmMessage">Message</label>
                <textarea class="-m-break" type="text" name="message"></textarea>
            </div>
        </div>
        <input type="text" name="_gotcha" style="display:none" />
        <input type="submit" value="Send">
        <input type="hidden" name="_next" value="/thanks" />
    </form>
</section>
<style>
    form {
        position: relative;
    }
    form input {
        border-bottom: 2px solid currentColor;
        outline: none;
    }
    form input::placeholder, 
    form textarea::placeholder {
            color: inherit;
            text-transform: uppercase;
        }
    form input.-m-break {
            margin-bottom: 1rem;
            width: 24.3rem;
        }
    form textarea {
        border-left: 2px solid currentColor;
        outline: none;
        border-bottom: 2px solid currentColor;
    }
    form textarea.-m-break {
            height: 30vh;
            width: 24.3rem;
            resize: none;
        }


.grouped-field {
    position: relative;
}
.grouped-field label {
        position: absolute;
        top: .4rem;
        left: .5rem;
        text-transform: uppercase;
        transition: all .3s ease;
    }
.grouped-field     input {
        transition: all .3s ease;
    }

@media (max-width: 30rem) {
    form input:not(:last-child), textarea.-m-break {
            width: 100%;
        }
}
</style>
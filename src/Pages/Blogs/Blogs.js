import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 class="bg-gradient text-center text-info my-4">Question and Answer</h2>
            <div class="container mx-auto my-4">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Question: Difference between authorization and authentication ?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Authentication:</strong>Authentication is a process of defining that user is correct owner of any account. Which tries to identify the user before accessing the application.
                                <li>Authentication confirms your identity to grant access to the system.
                                </li>
                                <li>It is the process of validating user credentials to gain user access.
                                </li>
                                <li>It determines whether user is what he claims to be
                                </li>
                                <li>Authentication usually requires a username and a password.
                                </li>
                                <li>Authentication is the first step of authorization so always comes first.
                                </li>
                                <li>For example, students of a particular university are required to authenticate themselves before accessing the student link of the university’s official website. This is called authentication.</li>
                                <br />

                                <strong> Authorization :</strong>Authorization is the process of verifying what they have access to.
                                If they do not have access, they will not be allowed to take that action. Keep in mind that this can be an authenticated user.
                                <li>Authorization determines whether you are authorized to access the resources.</li>
                                <li>It is the process of verifying whether access is allowed or not.</li>
                                <li>It determines what user can and cannot access.</li>
                                <li>Authentication factors required for authorization may vary, depending on the security level</li>
                                <li>Authorization is done after successful authentication.</li>
                                <li>For example, authorization determines exactly what information the students are authorized to access on the university website after successful authentication.</li>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Question:  Why are you using firebase? What other options do you have to implement authentication ?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Everything </strong>
                                Before
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
data{
    int<lower=1> N;
    int moral_dilemma[N];
    int both_norms_shown[N];
    real ingroup_norm_new[N];
    int ingroup_agree[N];
    int outgroup_disagree[N];
}
parameters{
    real<lower=0> bIn;
    real bBoth;
    real<lower=0> bOut;
    ordered[5] cutpoints;
}
model{
    vector[N] phi;
    cutpoints ~ normal( 0 , 10 );
    bBoth ~ normal( 0 , 0.5 );
    bOut ~ normal( 0 , 0.5 );
    bIn ~ normal( 0.6/0.75 * 1.02 , 0.5 );
    for ( i in 1:N ) {
        phi[i] = bIn * ingroup_norm_new[i] * ingroup_agree[N] + bBoth * both_norms_shown[i] + bOut * both_norms_shown[i] * ingroup_norm_new[i] * outgroup_disagree[N];
        moral_dilemma[i] ~ ordered_logistic( phi[i] , cutpoints );
    }
}
generated quantities{
    vector[N] phi;
    real dev;
    vector[N] log_lik;
    dev = 0;
    for ( i in 1:N ) {
        phi[i] = bIn * ingroup_norm_new[i] * ingroup_agree[N] + bBoth * both_norms_shown[i] + bOut * both_norms_shown[i] * ingroup_norm_new[i] * outgroup_disagree[N];
        dev = dev + (-2)*ordered_logistic_lpmf( moral_dilemma[i] | phi[i] , cutpoints );
        log_lik[i] = ordered_logistic_lpmf( moral_dilemma[i] | phi[i] , cutpoints );
    }
}


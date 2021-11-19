package edu.utfpr.cp.dacom.sa.soilcorrection.services;

import edu.utfpr.cp.dacom.sa.soilcorrection.services.Conversao;
import lombok.NonNull;

public class ConverteKgHaEmK2O 
        implements Conversao<Double, Double> {

    @Override
    public Double converte(@NonNull Double valor) {

        if (valor <= 0) {
            throw new IllegalArgumentException();
        }

        return valor * 1.2;
    }
    
}

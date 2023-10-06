package com.example.countdowntimer

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.CountDownTimer
import android.widget.Button
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {


    private lateinit var tvTimer: TextView
    private lateinit var btnStart: Button
    private lateinit var btnPause: Button
    private lateinit var btnStop: Button

    // Varibale for timer which will ne initialized later.
    private var countDownTimer: CountDownTimer? = null
    // The duration of the timer in milliseconds.
    private var timerDuration: Long = 60000
    // pauseOffset = timerDuration - time left
    private var pauseOffset: Long = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
       //setSupportActionBar(toolbar)

        tvTimer = findViewById(R.id.tvTimer)
        btnStart = findViewById(R.id.btnStart)
        btnPause = findViewById(R.id.btnPause)
        btnStop = findViewById(R.id.btnStop)

        tvTimer.text = (timerDuration/1000).toString()

       btnStart.setOnClickListener{
           startTimer(pauseOffset)
       }

        btnPause.setOnClickListener {
          pauseTimer()
        }

        btnStop.setOnClickListener {
            resetTimer()
        }
    }

    private fun startTimer(pauseOffsetL: Long){

        countDownTimer = object : CountDownTimer(timerDuration -pauseOffsetL,1000){
            override fun onTick(millisUntilFinished: Long) {
              pauseOffset = timerDuration - millisUntilFinished
                tvTimer.text =
                    (millisUntilFinished / 1000).toString()
            }

            override fun onFinish() {
               Toast.makeText(this@MainActivity,
                   "Timer is finished.",Toast.LENGTH_SHORT).show()
            }
        }.start()
    }

    private fun pauseTimer(){
        if(countDownTimer !=null){
            countDownTimer!!.cancel()
        }
    }
    private fun resetTimer(){
        if(countDownTimer !=null){
            countDownTimer!!.cancel()
            tvTimer.text = (timerDuration/1000).toString()
            countDownTimer = null
            pauseOffset = 0
        }
    }
}
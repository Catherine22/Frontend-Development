package com.cbb.myapp

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.widget.Toast
import br.com.mauker.materialsearchview.MaterialSearchView
import android.text.TextUtils
import android.speech.RecognizerIntent
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import com.cbb.jscoresdk.DiamondBridge


class MainActivity : AppCompatActivity() {
    private val TAG = "MainActivity"
    private var searchView: MaterialSearchView? = null
    private var tv_log: TextView? = null

    private var diamondBridge: DiamondBridge? = null


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        initComponent()
        injectJS()
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu_main, menu)
        return true
    }


    override fun onBackPressed() {
        if (searchView?.isOpen!!) {
            // Close the search on the back button press.
            searchView?.closeSearch()
        } else {
            super.onBackPressed()
        }
    }

    override fun onOptionsItemSelected(item: MenuItem?): Boolean {
        // Handle toolbar item clicks here. It'll
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        val id = item?.itemId

        when (id) {
            R.id.action_search -> {
                // Open the search view on the menu item click.

                searchView?.openSearch()
                return true
            }
        }

        return super.onOptionsItemSelected(item)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == MaterialSearchView.REQUEST_VOICE && resultCode == Activity.RESULT_OK) {
            val matches = data!!.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS)
            if (matches != null && matches.size > 0) {
                val searchWrd = matches[0]
                if (!TextUtils.isEmpty(searchWrd)) {
                    searchView?.setQuery(searchWrd, false)
                }
            }

            return
        }
        super.onActivityResult(requestCode, resultCode, data)
    }

    override fun onPause() {
        super.onPause()
        searchView?.clearSuggestions()
    }

    override fun onResume() {
        super.onResume()
        searchView?.activityResumed()
        val arr = resources.getStringArray(R.array.suggestions)

        searchView?.addSuggestions(arr)
    }


    private fun initComponent() {
        val toolbar: Toolbar = findViewById(R.id.toolbar)
        setSupportActionBar(toolbar)

        tv_log = findViewById(R.id.tv_log)
        searchView = findViewById(R.id.search_view)
        searchView?.adjustTintAlpha(0.8f)
        searchView?.clearHistory()
        searchView?.setOnQueryTextListener(object : MaterialSearchView.OnQueryTextListener {
            override fun onQueryTextSubmit(query: String): Boolean {
                queryData(query)
                return false
            }

            override fun onQueryTextChange(newText: String): Boolean {
                return false
            }
        })
        searchView?.setSearchViewListener(object : MaterialSearchView.SearchViewListener {
            override fun onSearchViewClosed() {
                // Do something once the view is closed.
            }

            override fun onSearchViewOpened() {
                // Do something once the view is open.
            }

        })
        searchView?.setOnItemClickListener { _, _, position, _ ->
            val suggestion = searchView?.getSuggestionAtPosition(position)
            searchView?.setQuery(suggestion, false)
        }
        searchView?.setOnVoiceClickedListener {
            Toast.makeText(this@MainActivity, "Voice clicked!", Toast.LENGTH_SHORT).show();
        }
    }

    private fun queryData(query: String) {
        tv_log?.text = String.format("Query: %s", query)
    }

    private fun injectJS() {
        diamondBridge = DiamondBridge(this@MainActivity)
    }
}


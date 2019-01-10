//
//  ViewController.swift
//  MyApp
//
//  Created by Catherine Chen (RD-TW) on 10/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UISearchBarDelegate {

    @IBOutlet weak var logLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        logLabel.numberOfLines = 0
    }
    
//        func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {
//          queryData(text: searchBar.text!)
//        }
    
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        // Do something as users clear the Search Bar
        if searchBar.text?.count == 0 {
            reloadData()
        } else {
            // Query data as users are typing to improve user experience.
            queryData(text: searchBar.text!)
        }
    }
    
    func queryData(text: String) {
        print("queryData:\(text)")
    }
    
    func reloadData() {
        print("reload data")
    }


}


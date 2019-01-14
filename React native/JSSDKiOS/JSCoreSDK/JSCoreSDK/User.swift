//
//  User.swift
//  MyApp
//
//  Created by Catherine Chen (RD-TW) on 14/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation
class User {
    var name: String
    var age: Int
    var isAdult: Bool
    
    init(name: String, age: Int, isAdult: Bool) {
        self.name = name
        self.age = age
        self.isAdult = isAdult
    }
}
